import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { UserContext } from '../contexts/UserContext';
const SingleOrder = () => {
  const {id} = useParams();
  const {getOrder, orders, getOrders} = useContext(OrderContext);
  const [thisOrder, setThisOrder] = useState();
  const [orderItems, setOrderItems] = useState();
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  getOrders()

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrder(id);
        console.log(orderData)
        setThisOrder(orderData);
        setOrderItems(orderData.orderItems)
        console.log('set order is', thisOrder);
        console.log(`items ${JSON.stringify(orderItems)}`)
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
  
    fetchOrder();

     }, [id]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      

      { thisOrder && <>

<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b-[1px] border-gray-200">
          <button className='bg-slate-300 py-2 px-4 rounded-md  mb-4 flex flex-row items-center gap-2' onClick={() => navigate(-1)}>
          <FiArrowLeft />
           <span> All Orders
           </span>
          </button>
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-md md:text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{id}</h1>
                <p className="text-base font-medium leading-6 text-gray-600">Placed on: {thisOrder.orderDate}</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800"></h3>

                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        {orderItems.map(item => (
<div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full " key={item.productId}>

                       
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-24 hidden md:block" src={item.image} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                            <h3 className="text-md xl:text-xl font-semibold leading-6 text-gray-800 ">{item.title}</h3>
                                
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">
                                        {item.price} 
                                    </p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{item.amount}</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{item.amount * item.price}</p>
                                </div>
                            </div>
                        </div>

                          
))}
                        
                        
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">{thisOrder.total}</p>
                                </div>
                               
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">Free</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">{thisOrder.total}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            DPD Delivery
                                            <br />
                                            <span className="font-normal">Delivery with 24 Hours</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">Free</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img className='rounded-full hover:brightness-50 transition duration-200' src={user.photoURL} alt={user.displayName} />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{user.displayName}</p>
                                    <p className="text-sm leading-5 text-gray-600">{orders ? <> {orders.length}</> :""} Previous Orders</p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{thisOrder.address}</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{thisOrder.address}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </>}
      
    </motion.div>
  )
}

export default SingleOrder;



