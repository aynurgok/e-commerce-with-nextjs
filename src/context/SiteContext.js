'use client'
import { createContext, useState}from "react";

export const Context = createContext()

const Provider = ({children}) => {
  
  const [addBasket, setAddBasket] = useState([]);
  const [products, setProducts] = useState([]);

  const data = {
    addBasket,
    setAddBasket,
    products,
    setProducts
  }
  return(
    <Context.Provider value= {data}>
      {children}
    </Context.Provider>
  );
}
export default Provider

