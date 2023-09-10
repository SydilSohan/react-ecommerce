// import React, { useContext } from 'react';
// import { FaArrowRight,  FaTrash } from 'react-icons/fa';
// import { SidebarContext } from '../contexts/SidebarContext';
// import CartItem from './CartItem';
// import { CartContext } from '../contexts/CartContext';
// import { Link } from 'react-router-dom';
// const Sidebar = () => {
//   const { cart, setCart, updateCartInFirestore, total, emptyCart} = useContext(CartContext);
//   const { isOpen, setIsOpen } = useContext(SidebarContext);
//   return (
//     <div className={isOpen ? "z-50  bg-white shadow-2xl h-screen w-full sm:w-3/6 md:w-3/6 lg:w-3/12 fixed top-0 right-0 translate-x-0 transition-all duration-300 overflow-hidden ease-linear" : "z-50 p-4 bg-white shadow-2xl h-screen w-full sm:w-2/6 md:w-3/6 lg:w-3/12 fixed top-0 right-0 translate-x-full transition-all duration-300 ease-linear overflow-hidden"}>

     
//       <div className='h-[70vh] overflow-y-scroll overflow-x-hidden'>
//         <CartItem />
//       </div>
//       <div className='fixed bottom-0 flex flex-col w-[350px] bg-white p-4 gap-2 h-3/12 overflow-hidden'>
//       <div className='flex flex-row  justify-between'>
//         <span> Total: {total} </span>
//         <button onClick={emptyCart}> <FaTrash /> </button>
//       </div>
//         <button className=' px-8 py-4 flex-grow bg-slate-400' onClick={updateCartInFirestore}>Save</button>

//         <Link to={"/checkout"} className='bg-black text-white px-8 py-4  flex-grow  text-center'>
//         <button className=''>Checkout</button>

//         </Link>
//       </div>
//     </div>);
// };

// export default Sidebar;
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { cart, setCart, updateCartInFirestore, total, emptyCart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          className="z-50 bg-white shadow-2xl h-screen w-full sm:w-3/6 md:w-3/6 lg:w-3/12 fixed top-0 right-0 overflow-hidden"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
          exit="closed"
        >
          <div className="h-[70vh] overflow-y-scroll overflow-x-hidden">
            <motion.div
              initial="hidden" // Set the initial animation state
              animate="visible" // Animate when in view
              variants={itemVariants} // Define animation variants
            >
              <CartItem />
            </motion.div>
          </div>
          <div className="fixed bottom-0 flex flex-col w-[350px] bg-white p-4 gap-2 h-3/12 overflow-hidden">
            <div className="flex flex-row justify-between">
              <span> Total: {total} </span>
              <button onClick={emptyCart}> <FaTrash /> </button>
            </div>
            <button className="px-8 py-4 flex-grow bg-slate-400" onClick={updateCartInFirestore}>Save</button>
            <Link to="/checkout" className="bg-black text-white px-8 py-4 flex-grow text-center">
              <button>Checkout</button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
