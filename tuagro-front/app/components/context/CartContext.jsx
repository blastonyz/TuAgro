import { createContext, useContext,useState } from "react";

const CartContext = createContext()

 export const useCartContext = () => useContext(CartContext)

 export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]); 
      };
    
      const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      };
    
      const clearCart = () => {
        setCart(() => []); 
      };
    return(
        <CartContext.Provider value={{addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
 }

