import React, { useContext } from 'react';
import { FaArrowRight, FaMinus, FaTrash } from 'react-icons/fa';
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
const Sidebar = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const { handleToggle, isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className={isOpen ? "z-50  bg-white shadow-2xl h-screen w-full sm:w-3/6 md:w-3/6 lg:w-3/12 fixed top-0 right-0 transition-all duration-500 overflow-hidden ease-linear" : "z-50 p-4 bg-white shadow-2xl h-screen w-full sm:w-2/6 md:w-3/6 lg:w-3/12 fixed top-0 -right-full transition-all duration-500 ease-linear overflow-hidden"}>

      <div className='flex flex-row gap-4 border-b-2 border-gray-400 shadow-md p-4 w-full  mb-0 relative '>
        <span>
          Shopping Bag ({cart.length})
        </span>
        <button onClick={() => setIsOpen(false)}>

          <FaArrowRight />

        </button>
      </div>
      <div className='h-[70vh] overflow-y-scroll overflow-x-hidden'>
        <CartItem />
      </div>
      <div className='fixed bottom-0 flex flex-col w-[350px] bg-white p-4 gap-2 h-3/12 overflow-hidden'>
      <div className='flex flex-row  justify-between'>
        <span> Total: 1000$ </span>
        <button onClick={() => setCart([])}> <FaTrash /> </button>
      </div>
        <button className=' px-8 py-4 flex-grow bg-slate-400' >View Cart</button>
        <button className='bg-black text-white px-8 py-4  flex-grow '>Checkout</button>
      </div>
    </div>);
};

export default Sidebar;
