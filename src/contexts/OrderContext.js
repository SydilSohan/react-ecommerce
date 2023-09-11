import React, { useContext, createContext, useEffect, useState } from 'react';
import { auth, db } from "../fireBaseConfig"
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, addDoc, query, orderBy, limit, startAt, endBefore } from 'firebase/firestore';
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
  // const getOrders = async (currentPage, ordersPerPage) => {
  //   try {
  //     if (user) {
  //       const userDocRef = doc(db, 'carts', user.uid);
  //       const userDocSnapshot = await getDoc(userDocRef);
  //       if (userDocSnapshot.exists()) {
  //         // Access the "orders" subcollection within the user document
  //         const ordersCollectionRef = collection(userDocRef, 'orders');
  
  //         // Calculate the start and end indexes for the current page
  //         const startIndex = (currentPage - 1) * ordersPerPage;
  //         const endIndex = startIndex + ordersPerPage;
  
  //         // Query for a specific range of orders
  //         const ordersQuerySnapshot = await getDocs( // Use getDocs instead of query
  //           query(
  //             ordersCollectionRef,
  //             orderBy('orderDate', 'desc'), // Adjust the sorting order as needed
  //             limit(ordersPerPage),
  //             startAt(startIndex), // Start at the first order of the current page
  //             endBefore(endIndex) // End before the order after the last order of the current page
  //           )
  //         );
  
  //         console.log(ordersQuerySnapshot);
  
  //         const newFetchedOrders = ordersQuerySnapshot.docs.map((doc) => ({
  //           doc: doc.data(),
  //           id: doc.id,
  //         }));
  //         setOrders(newFetchedOrders);
  //         console.log(newFetchedOrders)
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching orders from Firestore:', error);
  //   }
  // };
  
  // Call getOrders to fetch the current page of orders
  
  
  // Call getOrders to fetch the current page of orders
  
  // const getOrder = async () => {
  //   try {
  //     if (user) {
  //       const userDocRef = doc(db, 'carts', user.uid);
  //       const userDocSnapshot = await getDoc(userDocRef);
  //       if (userDocSnapshot.exists()) {
  //         // Access the "orders" subcollection within the user document
  //         const ordersCollectionRef = collection(userDocRef, 'orders');

  //         // Now you can query or get documents from the "orders" subcollection
  //         const ordersQuerySnapshot = await getDocs(ordersCollectionRef);

  //         ordersQuerySnapshot.docs.map((doc) => {
  //           const orderId = doc.id
  //           console.log(doc.data());
  //           console.log(orderId) // Access the data of each document in "orders"
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching orders from Firestore:', error);
  //   }
  // };
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
            price: item.price
  
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
          
  
        }
        else {
          alert("your cart is empty or databse error")
        }
      } catch (error) {
        console.error('Error placing order:', error);
      }
  
    } else alert("You have to be logged in to place order")
    

  };

 
  useEffect(() => {
    setOrderForm({
      ...orderForm,
      total: total
    })
  }, [cart, total])

  return (
    <OrderContext.Provider value={{ orders, getOrders, placeOrder, orderForm, setOrderForm, latestOrderId }}>
      {children}
    </OrderContext.Provider>

  )
}

export default OrderProvider;