import React, { useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { FiMinus, FiTrash, FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { SidebarContext } from '../contexts/SidebarContext';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const CartItem = () => {
  const {isOpen, setIsOpen} =useContext(SidebarContext)
  const {user } = useContext(UserContext)
  const { cart, removeFromCart, handleAmountChange, userCart, emptyCart } = useContext(CartContext);
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };

  return (

    <>
       <div className='flex flex-row gap-4 border-b-2 border-gray-400 shadow-md p-4 w-full  mb-0 relative '>
        <span>
          Shopping Bag ({cart.length})
        </span>
        <button onClick={() => setIsOpen(false)}>

          <FiArrowRight />

        </button>
      </div>
        <div className='p-4'>

        <AnimatePresence>
        {cart.map((item, index) => (
        <motion.div
        initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={itemVariants}
          transition={{ duration: 0.3, delay: index * 0.1, ease: easeInOut} }
          exit="closed"
        
         key={item.id} className='flex flex-row border-b-[1px] border-slate-300 py-4 w-full gap-y-10 items-start'>
          <div className='flex flex-row gap-4'>

          <Link className='w-[19%]' to={`/product/${item.id}`}>

          <img  alt='product image' src={item.image} />

          </Link>

            <div>
            <Link>
              
            </Link>
             <Link to={`/product/${item.id}`}>
             <span className=''>
              {item.title.length > 10 ? `${item.title.substring(0, 30)}...` : item.title}
              </span>
              </Link>
              <div className='flex flex-row items-center justify-center gap-8'>
                <div className='cursor-pointer w-[150px] py-2 px-1 flex flex-row flex-grow justify-center items-center bg-white border-gray-300 border-[1px] '>
                  <FiMinus  className="hover:text-red-400" onClick={() => {
                    if (item.amount > 1) {
                      handleAmountChange(item.id, item.amount - 1)
                    }
                  }} />
                  <input className=' text-center appearance-none flex justify-center items-center px-2 w-14 ' type="number" name="" id="" value={item.amount} onChange={e => handleAmountChange(item.id, Math.max(1, parseInt(e.target.value)))} />
                  <FiPlus className="hover:text-green-400 "onClick={() => handleAmountChange(item.id, item.amount + 1)} />
                </div>
                <span className=' flex w-7'>
                  ${(item.amount * item.price).toFixed(2)}
                </span>
                <button className='text-red-400 w-[10%]' onClick={() => removeFromCart(item.id)}>
            <FiTrash />
          </button>
              </div>
            </div>


          </div>



        </motion.div>
      ))}
        </AnimatePresence>
      
    </div>
           
        
        <> 
        
        
        
        </>

        
        
     
      
    </>
    
  );
};

export default CartItem;
