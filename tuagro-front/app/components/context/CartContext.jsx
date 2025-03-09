'use client'
import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  console.log(cart);
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


  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
    console.log('removido: ',itemId);
    
  };

  const total = (cart) => {
      return cart.reduce((initial,item) => item.price*item.quantity + initial,0 )
  }

  const clearCart = () => {
    setCart(() => []);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

