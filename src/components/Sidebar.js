import React, { useContext } from 'react';
import { FaArrowRight, FaMinus } from 'react-icons/fa';
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
const Sidebar = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const { handleToggle, isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className={isOpen ? "z-50  bg-white shadow-2xl h-screen w-full sm:w-3/6 md:w-3/6 lg:w-3/12 fixed top-0 right-0 transition-all duration-500 overflow-y-scroll overflow-x-hidden ease-linear" : "z-50 p-4 bg-white shadow-2xl h-screen w-full sm:w-2/6 md:w-3/6 lg:w-3/12 fixed top-0 -right-full transition-all duration-500 ease-linear"}>

      <div className='flex flex-row gap-4 border-b-2 border-gray-400 shadow-md p-4 w-full  mb-0 '>
        <span>
          Shopping Bag ({cart.length})
        </span>
        <button onClick={() => setIsOpen(false)}>

          <FaArrowRight />

        </button>
      </div>
      <div className=''>
        <CartItem />
      </div>
      <div className='fixed bottom-0 flex flex-grow '>
        <button className='bg-red-400 px-8 py-4 flex-grow' onClick={() => setCart([])}>Empty</button><button className='bg-red-400 px-8 py-4  flex-grow'>Checkout</button>
      </div>
    </div>);
};

export default Sidebar;
