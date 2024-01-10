import React from 'react'
import { useContext } from 'react';
import { Context } from '@/context/SiteContextcomponents';

const Basket = () => {
    const {products,setProducts,addBasket, setAddBasket} = useContext(Context)
    const handleOpenBasket = () => {
    
    };
  return (
    <div>
      <button onClick={handleOpenBasket}></button>
      <ul>
        {addBasket.map((product,i) => {
          <li key={index}>
            {product.title}
          </li>
        })}
      </ul>
    </div>
  )
}

export default Basket