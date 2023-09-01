import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown, FaHome } from 'react-icons/fa';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(40);
const {cart} = useContext(CartContext)

  

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div className={`w-full  px-32 bg-white mx-auto shadow-sm gap-4 flex justify-center flex-col align-middle items-center text-lg transition-all duration-300 ${isSticky ? "fixed shadow-2xl top-0 z-50 py-4 h-[70px]" : "h-[90px]"}`}>
      <div className='w-full flex justify-between text-4xl mb-3 bg-'>
        <Link to={"/"}>
          <FaHome />
        </Link>
        <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
          <FaCartArrowDown />
          <spa className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</spa>
        </button>
      </div>
    </div>
  );
};

export default Header;
