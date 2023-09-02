import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import {  FaCartPlus, FaHeart } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext';


const Grid = () => {
    const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [category, setCategory] = useState("");
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
  const filterProducts = products.filter(item => {
    return category === "" || item.category === category;
  });


    return (
      <>
        <div className='bg-white rounded-sm  w-full md:w-4/6 '>
          <div className='bg-white rounded-sm   '>
            <select className=' px-4 py-2 border-slate-300 bg-white border-[1px] mb-4 text-left capitalize'
              onChange={(e) => setCategory(e.target.value)} // Move the onChange event here
              value={category} // Set the selected value to the current category
            >
              <option className='capitalize' value="">All Categories</option> {/* Add an option for displaying all categories */}
              {uniqueCategories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className={
                    category === cat
                      ? "capitalize py-2 bg-white text-black border-[1px] border-slate-300 cursor-pointer flex-grow my-2 transition-all duration-200 rounded-full text-left"
                      : "capitalize py-2 bg-black text-white border-[1px] border-transparent hover:border-slate-300 hover:bg-white hover:text-black cursor-pointer flex-grow m-2 transition-all duration-200 rounded-full text-left"
                  }
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>

        </div>
        <div className="place-items-center grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {
            filterProducts.map(product => (
              <div key={product.id} className="min-h-[300px] aspect-square w-full group border border-gray-300 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 ">
                <div className='text-sm text-white flex flex-col p-2 gap-2  absolute top-0 right-0 bg-transparent w-16 h-16  z-10'>
                  <button className=' duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent' onClick={() => addToCart(product)}>
                    <FaCartPlus className='' />

                  </button>
                  <Link className="w-full duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent" to={`/product/${product.id}`}>
                    <button className=' '>
                      <FaHeart />

                    </button>
                  </Link>

                </div>
                <div className='overflow-hidden relative transition-all duration-300 w-full flex justify-center my-4 h-40'>
                  <img src={product.image} alt={product.title} className="group-hover:scale-125  w-auto  mb-2 h-50 transition-all duration-300" />

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
          }
        </div>


      </>

    )
  }
  export default Grid;