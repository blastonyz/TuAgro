'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const { user } = useAuthContext()
  console.log(cart);

  useEffect(() => {
    const loadCart = async () => {
      const localStorageCart = localStorage.getItem(`cart-${user.email}`);
      console.log('cart local: ', localStorageCart);

      if (localStorageCart) {
        setCart(JSON.parse(localStorageCart));
      } else {
        const savedCart = await getSavedCart(user.cart);
        if (!savedCart) {
          setCart([])
        } else {
          const parsedCart = JSON.parse(savedCart)
          console.log('db response(context) savedCart: ', parsedCart);
          setCart(parsedCart);
        }
      }
    };

    if (user?.email) {
      loadCart();
    }
  }, [user?.email]);

  useEffect(() => {
    if (cart?.length > 0 && user?.email && user.email !== '') {
      localStorage.setItem(`cart-${user.email}`, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart(
      (prevCart) => {
        const addedIndex = cart.findIndex(prod => prod._id == item._id)
        if (addedIndex < 0) {
          return [...prevCart, item];
        } else {
          const updatedCart = prevCart.map((prod, index) =>
            index === addedIndex
              ? { ...prod, quantity: prod.quantity + item.quantity }
              : prod
          );
          return updatedCart;
        }
      }
    );
  };

  const updateQuantity = (product, newQuantity) => {

    setCart((prevCart) =>
      prevCart.map((prod) =>
        prod._id === product._id ? { ...prod, quantity: newQuantity + prod.quantity } : prod
      )
    );
    localStorage.setItem(`cart-${user.email}`, JSON.stringify(cart));
  };


  const removeFromCart = (itemId) => {
    const updatedCart = (prevCart) => prevCart.filter((item) => item._id !== itemId)
    setCart(updatedCart);
    localStorage.setItem(`cart-${user.email}`, JSON.stringify(updatedCart))
    console.log('removido: ', itemId);

  };

  const total = (cart) => {
    return cart.reduce((initial, item) => item.price * item.quantity + initial, 0)
  }

  const clearCart = async () => {
   
    localStorage.removeItem(`cart-${user.email}`);
    const cid = user.cart
    try {
      const response = await fetch(`/api/cart/${cid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })

      if (!response.ok) {
        const errorData = await response.json()
        return errorData
      }

      const data = await response.json()
      console.log('data de cartPut: ', data);
      setCart(() => []);
      return data
    } catch (error) {
      console.log('error: ',error)
    }
     
  };

  const getSavedCart = async (cid) => {
    const response = await fetch(`/api/cart/${cid}`)
    if (!response.ok) {
      console.log('error al recuperar cart de la db');

    }
    const data = await response.json()
    console.log('cart context getSavedCart:', data);

    return data
  }

  const saveCart = async (cart) => {
    console.log('cart to req in context: ', cart);
    const cartBody = {
      cid: user.cart,
      products: cart.map(item => ({
        productId: item._id,
        quantity: item.quantity
      }))
    };
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(cartBody),
      credentials: 'include'
    })
    const data = await response.json()
    if (!response.ok) {
      return { success: false, message: data.message || "Failed to save cart" }
    }
    console.log('data.cart: ', data);

    return { success: true, cart: data.cart }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, updateQuantity, saveCart }}>
      {children}
    </CartContext.Provider>
  )
}

