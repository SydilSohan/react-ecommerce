import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import SignIn from './SignIn';
import {motion, AnimatePresence, easeInOut} from "framer-motion"

// const Header = () => {
// const {cart} = useContext(CartContext);
// const {user} = useContext(UserContext);
//   const { isOpen, setIsOpen } = useContext(SidebarContext);
//   return (
//     <div className={`w-full  px-32 bg-white mx-auto shadow-sm gap-4 flex justify-center flex-col  items-center text-lg transition-all duration-300 pt-4 pb-3`}>
//       <div className='w-full flex justify-between text-4xl mb-3 bg-'>
//         <Link to={"/"}>
//           <FiHome />
//         </Link>   
//         <div>

//         <div className='flex flex-row gap-x-4'>
      

//            <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
//           <FiShoppingCart />
//           <span className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</span>
//         </button>
//         <SignIn />

//         </div>

        
         
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Header;


const Header= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const {cart} = useContext(CartContext);
const {user} = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

 
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b-[1px] border-gray-200">
      <div class="relative flex items-center justify-between">
        <Link
          to={"/"}
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <svg
            class="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Company
          </span>
        </Link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Product
            </a>
          </li>
          <li>
            <Link to={"/features"}>
              Features
            </Link>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </a>
          </li>
          <li>
          <div className='flex flex-row gap-x-4'>
      

      <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
     <FiShoppingCart />
     <span className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</span>
   </button>
   <SignIn />

   </div>
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
          
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          <AnimatePresence>

  {isMenuOpen && (
            <motion.div className="absolute top-0 left-0 w-full z-50"
         
            >
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <svg
                        class="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                    <div className='flex flex-row gap-x-4'>
      

      <button className='flex flex-row gap-2' onClick={() => setIsOpen(!isOpen)}>
     <FiShoppingCart />
     <span className="text-xs text-white bg-green-400 rounded-full px-2 py-1 -ml-5 mt-3"> {cart.length}</span>
   </button>
   <SignIn />

   </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        
        </div>
      </div>
    </div>
  );
};

export default Header;


     