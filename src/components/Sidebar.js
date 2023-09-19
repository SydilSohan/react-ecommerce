
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {  total, emptyCart, isOpen } = useContext(CartContext);

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
<div className='w-screen h-screen  bg-black/40 z-40 top-0 transition-all ease-in duration-200 fixed '>

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
          <div className="fixed bottom-0 flex flex-col w-full bg-white p-4 gap-2 h-3/12 overflow-hidden">
            <div className="flex flex-row justify-between">
              <span> Total: {total} </span>
              <button onClick={emptyCart}> <FaTrash /> </button>
            </div>
            <Link to="/checkout" className="bg-black text-white px-8 py-4 flex-grow text-center">
              <button>Checkout</button>
            </Link>
          </div>
        </motion.div>


</div>
          
       
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
