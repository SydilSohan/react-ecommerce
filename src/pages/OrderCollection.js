import React, { useContext, useEffect} from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { Link } from 'react-router-dom';

const OrderCollection =  () => {
  const {getOrders, orders} = useContext(OrderContext)
  useEffect(()=> {
    getOrders()
  }, [])
  return (
    <div className=' text-black min-h-screen  w-full sm:w-7/12 mx-[5px] sm:mx-auto'>
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 sm:pr-10 lg:px-8">
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard sm:px-8 pt-3 rounded-bl-lg rounded-br-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Serial
            </th>
            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Date
            </th>
            
          
            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Products
            </th>
            <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300" />
          </tr>
        </thead>

        { orders ?
         <tbody className="bg-white">
        {orders.map((order, index) => (
             
          <tr key={order.id}>
            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex items-center">
                <div>
                  <div className="text-sm leading-5 text-gray-800">{index}</div>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="text-sm leading-5 text-blue-900">
            <div>
              <p className='text-black'></p>
            </div>
              </div>
            </td>
           
            
            <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                  aria-hidden=""
                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                />
                <span className="relative text-xs">{order.doc.orderItems.length}</span>
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
              ${order.doc.total}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <Link to={`/orders/${order.id}`}>
            <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                View Details
              </button>
            </Link>
              
            </td>
          </tr>
         
          

        ))}
          
         
        </tbody>
        : ""
        
        
         }
       
      </table>
      
    </div>
  </div>
       


      {/* <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
        <div>
          <p className="text-sm leading-5 text-blue-700">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">200</span>
            of
            <span className="font-medium">2000</span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            <div>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
              >
                1
              </a>
              <a
                href="#"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
              >
                2
              </a>
              <a
                href="#"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
              >
                3
              </a>
            </div>
            <div v-if="pagination.current_page < pagination.last_page">
              <a
                href="#"
                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div> */}
    </div>
  )
}

export default OrderCollection;