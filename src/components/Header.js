import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
const {cart} = useContext(CartContext);
const {user} = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className={`w-full  px-32 bg-white mx-auto shadow-sm gap-4 flex justify-center flex-col align-middle items-center text-lg transition-all duration-300 py-2`}>
      <div className='w-full flex justify-between text-4xl mb-3 bg-'>
        <Link to={"/"}>
          <FiHome />
        </Link>   
        <div>

        <div className='flex flex-row gap-x-4'>
      

           <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
          <FiShoppingCart />
          <span className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</span>
        </button>
        <Link to={"/profile/"}>
        { user ? <img src={user.photoURL}  className='rounded-full flex-shrink w-10'/>  : ""}

        </Link>

        </div>

        
         
        </div>
        
      </div>
    </div>
  );
};

export default Header;
