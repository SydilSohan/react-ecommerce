import React, { useContext, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { FaMinus, FaTrash, FaPlus } from 'react-icons/fa';

const CartItem = () => {
  const [amount, setAmount] = useState(0)
  const { cart, removeFromCart, handleAmountChange } = useContext(CartContext);

  return (
    <div className='p-4'>
      {cart.map(item => (
        <div key={item.id} className='flex flex-row border-b-[1px] border-slate-300 py-4 w-full gap-y-10 items-start'>
          <div className='flex flex-row gap-4'>
            <img className='w-[19%] ' alt='product image' src={item.image} />

            <div>
              <span className=''>
              {item.title.length > 10 ? `${item.title.substring(0, 30)}...` : item.title}
              </span>
              <div className='flex flex-row items-center justify-center gap-8'>
                <div className='cursor-pointer w-24 py-2 px-1 flex flex-row flex-grow justify-center items-center bg-white border-gray-300 border-[1px] '>
                  <FaMinus  className="hover:text-red-400" onClick={() => {
                    if (item.amount > 1) {
                      handleAmountChange(item.id, item.amount - 1)
                    }
                  }} />
                  <input className=' text-center appearance-none flex justify-center items-center px-2 w-14 ' type="number" name="" id="" value={item.amount} onChange={e => handleAmountChange(item.id, Math.max(1, parseInt(e.target.value)))} />
                  <FaPlus className="hover:text-green-400 "onClick={() => handleAmountChange(item.id, item.amount + 1)} />
                </div>
                <span className=' flex w-7'>
                  ${Math.round(item.amount * item.price)}
                </span>
                <button className='text-red-400 w-[10%]' onClick={() => removeFromCart(item.id)}>
            <FaTrash />
          </button>
              </div>
            </div>


          </div>



        </div>
      ))}
    </div>
  );
};

export default CartItem;
