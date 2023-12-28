import "../Products/Products.css";
import { MdFavoriteBorder } from 'react-icons/md';

const Products = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {[...Array(5)].map((_, index) => (
        <div key={index} className='border p-4'>
          <div className='product-card p-4'>
            <a href='#'>
              <img
                src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
                alt='Product Image'
              />
            </a>
            <div className='product-details mt-3 flex justify-between items-center'>
              <p className='product-name'>Product-name</p>
            </div>
            <div className='description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo?
              </p>
            </div>
            <div className='shopping-card flex justify-between items-center'>
              <p className='product-price'>200$</p>
              <button className='px-4 py-2 bg-blue-500 text-white rounded'>
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
