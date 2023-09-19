import React, { useContext, createContext, useEffect, useState } from 'react';
import {  db } from "../fireBaseConfig"
import { doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore';
import { UserContext } from './UserContext';
import { CartContext } from './CartContext';
export const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [latestOrderId, setLatestOrderId] = useState(0)
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState();
  const { cart, total, emptyCart } = useContext(CartContext);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  })
  const getOrders = async () => {
    try {
      if (user) {
        const userDocRef = doc(db, 'carts', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          // Access the "orders" subcollection within the user document
          const ordersCollectionRef = collection(userDocRef, 'orders');

          // Now you can query or get documents from the "orders" subcollection
          const ordersQuerySnapshot = await getDocs(ordersCollectionRef);

          const newFethchedOrders = ordersQuerySnapshot.docs.map((doc) => ({
            doc : doc.data(),
              id: doc.id

          }));
          setOrders(newFethchedOrders)
         
        }
      }
    } catch (error) {
      console.error('Error fetching orders from Firestore:', error);
    }
  };
 
  const getOrder = async (id) => {
    try {
      if (user) {
        const userDocRef = doc(db, 'carts', user.uid, "orders", id);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
      
          return userDocSnapshot.data()
        }
      }
    } catch (error) {
      console.error('Error fetching orders from Firestore:', error);
    }
  };
  const getLatestOrder = async (id) => {
    try {
      const userDocRef = doc(db, 'carts', user.uid, "orders", id);
      const orderDocSnapshot = await getDoc(userDocRef);
      if (user && latestOrderId) {
        if (orderDocSnapshot.exists()) {
         const order = JSON.stringify( orderDocSnapshot.data())
          console.log(` order is ${order}`)
        }
      }
      console.log(`$ here is latest order inside funcgtion ${userDocRef.id}`)
      setLatestOrderId(userDocRef.id)
    }

    catch (error) {
      console.error('Error placing order:', error);
    }
  }
  const placeOrder = async () => {

    if (user) {

      try {
        const userDocRef = doc(db, 'carts', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
  
        if (userDocSnapshot.exists() && cart.length > 0) {
  
          const orderItems = cart.map((item) => ({
            productId: item.id,
            amount: item.amount,
            price: item.price,
            image : item.image,
            title: item.title
  
          }))
          const ordersCollectionRef = collection(userDocRef, 'orders');
  
          const newOrderRef = await addDoc(ordersCollectionRef, {
            ...orderForm,
            orderItems: orderItems,
            orderDate: new Date().toLocaleDateString(),
            // Other order details
          });
          console.log(` latest order is ${newOrderRef.id}`)
          getLatestOrder(newOrderRef.id)
          emptyCart()
      
          setOrderForm({
            address
              :
              "",
            city
              :
              "",
            country
              :
              "",
            email
              :
              "",
            name
              :
              "",
            postal_code
              :
              "",
            total
              :
              10.99
          })
          return newOrderRef.id;

          
  
        }
        else {
          alert("your cart is empty or databse error")
        }
      } catch (error) {
        console.error('Error placing order:', error);
      }
  
    } else alert("You have to be logged in to place order")
    

  };

 
  // useEffect(() => {
  //   setOrderForm({
  //     ...orderForm,
  //     total: total
  //   })
  // }, [cart])

  return (
    <OrderContext.Provider value={{ orders, getOrders, placeOrder, orderForm, setOrderForm, latestOrderId, getOrder }}>
      {children}
    </OrderContext.Provider>

  )
}

export default OrderProvider;