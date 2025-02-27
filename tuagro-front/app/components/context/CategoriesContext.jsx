'use client'
import { createContext, useContext,useEffect,useState } from "react";

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext)

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [loading,setLoading] =  useState(true)
    useEffect( () => {
    const fetchCategories = async () => {
       
        try {
          const response = await fetch('/api/categories',{cache:'force-cache'});
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json(); 
          console.log('context fetch data:', data); 
          setCategories(data); 
        } catch (error) {
            console.error("Error fetching categories:", error);
          } finally {
            setLoading(false);
         
          }
   } 
        fetchCategories()
        }, [])
        
        return (
            <CategoriesContext.Provider value={{ categories, loading }}>
              {children}
            </CategoriesContext.Provider>
          );     
    }



