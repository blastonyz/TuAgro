'use client'
import { useState, useEffect } from "react"
import Button from "../ui/button/Button";

const Counter = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);
  
    const increase = () => {
        setQuantity(prev => prev + 1);
    };
  
    const decrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
  
    useEffect(() => {
        onQuantityChange(quantity);
      }, [quantity, onQuantityChange]);
      
    return (
      <div className='quantityCont'>
        <Button onClick={decrease} text={'-'}/>
        <p className='number'>{quantity}</p>
        <Button onClick={increase} text={'+'}/>
      </div>   
    );
  };

export default Counter;