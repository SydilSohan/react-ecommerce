import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { SidebarContext } from '../contexts/SidebarContext';
const Header = () => {
  const { handleToggle, isOpen, setIsOpen } = useContext(SidebarContext);
  return (<div className=' shadow-sm gap-4 flex justify-center flex-col align-middle items-center text-lg'>
    <div>
      <h1> Sohan's Shop</h1>

    </div>
    <div>
      <ul className='flex flex-row text-base gap-x-4'>
      <Link to={"/"}>
      <li>Home</li>

      </Link>
        <li>Products </li>
        <li className='flex flex-row flex-grow'> <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)} >
          <FaCartArrowDown />
          <span>
            Cart
          </span>

        </button></li>
      </ul>


    </div>

  </div>);

};

export default Header;
