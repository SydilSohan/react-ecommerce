import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Product = (props) => {

  const [product, setProduct] = useState({})
  const { id } = useParams();
  const [status, setStatus] = useState();
  const { isOpen, setIsOpen} = useContext(SidebarContext);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json()
      setProduct(data);
    }
    fetchProducts();
  setTimeout(() => {
    setIsOpen(false)
  }, 1000)

  }, [id])


  return (
  
  
  <div className='flex justify-center text-center w-full  lg:w-1/2 mx-auto flex-col'>
  <img className='w-44 flex justify-self-center mx-auto' src={product.image} />

  <h3 className='bg-slate-200 rounded-full text-black border-slate-400 border-2 mb-3 py-3 flex-shrink my-4 px-4 mx-auto'> {product.category}</h3>
 <h1 className='text-center text-4xl'> {product.title} </h1>
  <button className=' flex-shrink mx-auto my-4 text-white duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent' onClick={() => addToCart(product)}>
               Add to Cart <FaPlus className=' mx-2' />

            </button>
  <span className='text-xl my-4'>
    ${product.price}
  </span>
  <p>
    {product.description}
  </p>
  

  
 
  </div>);
};

export default Product;
