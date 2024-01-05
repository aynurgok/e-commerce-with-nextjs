'use client'
import React, {useEffect, useContext} from "react";
import SiteContext, {Context} from '../../Context/SiteContext'
import "../Products/Products.css";
import { MdFavoriteBorder } from 'react-icons/md';
import axios from "axios";

const Products = () => {

  const {products,setProducts,addBasket, setAddBasket} = useContext(Context)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log("hata", err)
    })
  }, [])

  const handleAddToBasket = (product) => {
    setAddBasket([...addBasket, product]);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((product, index) => (
        <div key={index} className='border p-4'>
          <div className='product-card p-4'>
            <a href='#'>
              <img src={product.image} alt='Product Image' />
            </a>
            <div className='product-details mt-3 flex justify-between items-center'>
              <p className='product-name'>{product.title}</p>
            </div>
            <div className='shopping-card flex justify-between items-center'>
              <p className='product-price'>{product.price}$</p>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded'
                onClick={() => handleAddToBasket(product)}>
                Sepete Ekle
              </button>
            </div>
            <MdFavoriteBorder className='favori-btn' />
          </div>
        </div>
      ))}
    </div>
  );
};


export default Products;
