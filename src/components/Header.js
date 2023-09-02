import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
const Header = () => {
const {cart} = useContext(CartContext)

  

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div className={`w-full  px-32 bg-white mx-auto shadow-sm gap-4 flex justify-center flex-col align-middle items-center text-lg transition-all duration-300 `}>
      <div className='w-full flex justify-between text-4xl mb-3 bg-'>
        <Link to={"/"}>
          <FiHome />
        </Link>
        <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
          <FiShoppingCart />
          <span className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
