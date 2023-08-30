import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { FaPlus, FaCartPlus, FaHeart } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext';

const Home = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [category, setCategory] = useState("");
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
  const filterProducts = products.filter(item => {
    return category === "" || item.category === category;
  });




  const Grid = () => {
    return (

      filterProducts.map(product => (
        <div key={product.id} className="max-w-[300px] max-h-[300px] z-30 group border border-gray-300 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 ">
          <div className='text-sm text-white flex flex-col p-2 gap-2  absolute top-0 right-0 bg-transparent w-16 h-16  z-50'>
            <button className=' duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent' onClick={() => addToCart(product, product.id)}>
              <FaCartPlus className='' />

            </button>
            <button className=' duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent'>
              <FaHeart />

            </button>
          </div>
          <div className='overflow-hidden relative transition-all duration-300 w-full flex justify-center my-4 h-40'>
            <img src={product.image} alt={product.title} className="group-hover:scale-125  w-3/5  mb-2 h-50 transition-all duration-300" />

          </div>
          <div className='flex flex-col p-3'>
            <span>
              {product.category}
            </span>
            <h2 className="text-md font-semibold mb-2">{product.title}</h2>

            <p className="text-gray-600">${product.price}</p>

          </div>

        </div>


      ))

    )
  }
  return (

    <div className='w-full mt-8 sm:w-11/12 md:mx-10px lg:w-5/6 mx-auto'>
      <div className='bg-white rounded-sm  w-full md:w-4/6 s '>

        <ul className='grid grid-cols-3'>
          <li  className= { category === "" ? " text-center capitalize py-2 bg-white text-black border-[1px] border-slate-300   cursor-pointer flex-grow  my-2 transition-all duration-200 rounded-full": "capitalize py-2 bg-black text-white border-[1px] border-transparent hover:border-slate-300 hover:bg-white hover:text-black cursor-pointer flex-grow  m-2 transition-all duration-200 rounded-full text-center "}
              onClick={() => setCategory("")}
          
          >

            All
          </li>
          {uniqueCategories.map(cat => (
            <li
              key={cat}
              className= { category === cat ? "capitalize py-2 bg-white text-black border-[1px] border-slate-300   cursor-pointer flex-grow  my-2 transition-all duration-200 rounded-full text-center ": "capitalize py-2 bg-black text-white border-[1px] border-transparent hover:border-slate-300 hover:bg-white hover:text-black cursor-pointer flex-grow  m-2 transition-all duration-200 rounded-full text-center "}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="place-items-center grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">


        <Grid />

      </div>
    </div>

  );
};

export default Home;
