import React, { useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { FaMinus, FaTrash, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const { cart, removeFromCart, handleAmountChange } = useContext(CartContext);

  return (
    <div className='p-4'>
      {cart.map(item => (
        <div key={item.id} className='flex flex-row border-b-[1px] border-slate-300 py-4 w-full gap-y-10 items-start'>
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
