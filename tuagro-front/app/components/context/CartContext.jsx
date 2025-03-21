'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const {user} = useAuthContext()
  console.log(cart);

  useEffect(() => {
    const existingCart = localStorage.getItem(`cart-${user.email}`)
    console.log('cart local: ',existingCart);
    
    if(existingCart){
    setCart(JSON.parse(existingCart)) 
    } else{
      setCart([])
    }
 
    
  }, [user?.email]); 

  useEffect(() => {
    if (cart.length > 0 && user?.email && user.email !== '') {
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
        prod._id === product._id ? { ...prod, quantity: newQuantity + prod.quantity} : prod
      )
    );
  };


  const removeFromCart = (itemId) => {
    const updatedCart = (prevCart) => prevCart.filter((item) => item._id !== itemId)
    setCart(updatedCart);
    localStorage.setItem(`cart-${user.email}`,JSON.stringify(updatedCart))
    console.log('removido: ',itemId);
    
  };

  const total = (cart) => {
      return cart.reduce((initial,item) => item.price*item.quantity + initial,0 )
  }

  const clearCart = () => {
    setCart(() => []);
    localStorage.removeItem(`cart-${user.email}`);
  };

  const saveCart = async (cart) => {
    console.log('cart to req in context: ',cart);
    const cartBody = {
      cid: user.cart,
      products: cart.map(item => ({
        productId: item._id,  
        quantity: item.quantity 
      }))
    };
    const response = await fetch('/api/cart',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        
      },
      body:JSON.stringify(cartBody),
      credentials: 'include'
    })
    const data = await response.json()
    if(!response.ok){
      return { success: false, message: data.message || "Failed to save cart" }
    }
    console.log('data.cart: ',data);
    
    return { success: true, cart: data.cart }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total,updateQuantity,saveCart }}>
      {children}
    </CartContext.Provider>
  )
}

