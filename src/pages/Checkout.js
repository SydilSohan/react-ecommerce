import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { OrderContext } from '../contexts/OrderContext';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const {placeOrder, orderForm, setOrderForm, latestOrderId} = useContext(OrderContext);
  const {user} = useContext(UserContext);
  const {cart, total, emptyCart, setIsOpen} = useContext(CartContext);
  const navigate = useNavigate();
  
  useEffect(()=> {
    setIsOpen(false)
  }, [])
  
  const handleInputChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name] : e.target.value
    })
  }
  
 
  
  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log(orderForm);
    console.log(user)
    const id = await placeOrder()
    if (id) {
      navigate(`/orders/${id}`)

    }
    
  } 

  return (
   
   
    <div className=" flex flex-col-reverse md:grid md:grid-cols-3 w-full sm:w-11/12 mx-auto "> 
      <div className="lg:col-span-2 col-span-3 bg-indigo-50 sm:bg-white space-y-8 sm:px-1 px-2">
        <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
          <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
            <div className="text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm font-medium ml-3">Checkout</div>
          </div>
          <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
          <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
        </div>
        <div className="rounded-md">
          <form id="payment-form"  onSubmit={handleSubmit}>
            <section>
              <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
              <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600 p-4">
              
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Name</span>
                  <input 
                  type='text'
                  onChange={handleInputChange}
                  value={orderForm.name}
                   name="name" className="focus:outline-none px-3" placeholder="Try Odinsson" required />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Email</span>
                  <input 
                  onChange={handleInputChange}
                  value={orderForm.email}
                  name="email" type="email" className="focus:outline-none px-3" placeholder="try@example.com" required />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Address</span>
                  <input 
                   onChange={handleInputChange}
                  value={orderForm.address}
                  name="address" className="focus:outline-none px-3" placeholder="10 Street XYZ 654"  required />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">City</span>
                  <input 
                   onChange={handleInputChange}
                  value={orderForm.city}
                  name="city" className="focus:outline-none px-3" placeholder="San Francisco"  required/>
                </label>
                
                <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                  <span className="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                  <input
                    onChange={handleInputChange}
                  value={orderForm.zip}
                   name="postal_code" className="focus:outline-none px-3" placeholder="98603" />
                </label>
                <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                  <span className="text-right px-2">Country</span>
                  <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                    <select 
                      onChange={handleInputChange}
                  value={orderForm.country}
                     name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                      <option value="AU">Australia</option>
                      <option value="BE">Belgium</option>
                      <option value="BR">Brazil</option>
                      <option value="CA">Canada</option>
                      <option value="CN">China</option>
                      <option value="DK">Denmark</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="HK">Hong Kong</option>
                      <option value="IE">Ireland</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MX">Mexico</option>
                      <option value="NL">Netherlands</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="SG">Singapore</option>
                      <option value="ES">Spain</option>
                      <option value="TN">Tunisia</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                    </select>
                  </div>
                </label> <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                <span className="text-right px-2">Card</span>
                <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required />
              </label>
                <button className="submit-button px-4 py-3 rounded-full bg-blue-500 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" type='submit'>
          Pay ${total}
        </button>
              </fieldset><div className="rounded-md">
        
        </div>
        
            </section>
          </form>
        </div>
        
      </div>
      <div className=" bg-white  p-2  col-span-3 px-2 grid col-span-1">
        <h1 className="py-6 border-b-2 text-xl text-gray-600 sm:px-8">Order Summary</h1>
        { cart.length > 0 ? 

          <>

          <ul className="py-6 border-b space-y-6   p-2 ">
        {cart.map(item => (
          <li key={item.id} className="grid grid-cols-3 sm:grid-cols-3 gap-2 border-b-1">
            <div className=" self-center mr-2">
              <img src={item.image} alt="Product" className="rounded w-16" />
            </div>
            
            <div className="col-span-2 pt-3">
            <span className="text-gray-600 text-md font-semi-bold"> {item.title}</span>

              <div className="flex items-center space-x-2 text-sm justify-between">
                <span className="text-gray-400">{`${item.amount} x ${item.price}`}</span>
                <span className="text-blue-500 font-semibold inline-block">${item.amount * item.price}</span>
              </div>
            </div>
          </li>
      ))}
          
        
       
          
        </ul>
        <div className="px-2 border-b">
          <div className="flex justify-between py-4 text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold text-blue-500">${total}</span>
          </div>
          <div className="flex justify-between py-4 text-gray-600">
            <span>Shipping</span>
            <span className="font-semibold text-blue-500">Free</span>
          </div>
        </div>
        <div className="font-semibold text-xl px-2 flex justify-between py-8 text-gray-600">
          <span>Total</span>
          <span>${total}</span>
        </div>
       

          
        </>
        
         :  <p className='mx-6'> Your cart is empty.  Please add some products to cart</p> }
      
      
      </div>
    </div>
  );
};

export default CheckoutPage;
