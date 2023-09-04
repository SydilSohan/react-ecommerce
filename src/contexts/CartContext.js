
import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../fireBaseConfig';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { UserContext } from './UserContext';



export const CartContext = createContext();



const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [userCart, setUserCart] = useState();
  const [total, setTotal] = useState(0);
 
  
  const addToCart = async (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
  
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      const newCartItem = { ...product, amount: 1 };
      setCart([...cart, newCartItem]);
    }
  };
  
  const removeFromCart = async (id) => {
    const removedCart = cart.filter(item => item.id !== id);
    setCart(removedCart)

  }
  const emptyCart = async () => {
    setCart([]);
    setTotal(0)


  }
  const handleAmountChange = async (id, newAmount) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: newAmount };
      }
      return item;
    });


    setCart(updatedCart);


  };
  const updateCartInFirestore = async () => {
    try {
      if (user) {
        const userDocRef = doc(db, 'carts', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);            
        setTotal(userDocSnapshot.data().total)
        if (userDocSnapshot.exists()) {
          const userCartItems = cart.map((item) => ({
            productId: item.id,
            amount: item.amount,
          }));

          await updateDoc(userDocRef, {
            cartItems: userCartItems,
            total: total
          });
        } else {
          await setDoc(userDocRef, {
            cartItems: cart.map((item) => ({
              productId: item.id,
              amount: item.amount,

            })),
          });
        }
      }
    } catch (error) {
      console.error('Error updating cart in Firestore:', error);
    }
  };


  useEffect(() => {
    const getFirebaseCart = async () => {
      try {
        if (user) {
          const userDocRef = doc(db, 'carts', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {

            const initalItems = userDocSnapshot.data().cartItems;
            setTotal(userDocSnapshot.data().total)
            const fetchProducts = Promise.all(
              initalItems.map(async (cartItem) => {
                const response = await fetch(
                  `https://fakestoreapi.com/products/${cartItem.productId}`
                );
                const product = await response.json();
                return { ...product, amount: cartItem.amount };
              })
            );
            fetchProducts.then((data) => {
              setCart(data)
            })

          } else {
            // Create the user document if it doesn't exist

          }
        }
      } catch (error) {
        console.error('Error updating cart in Firestore:', error);
      }
    }
    getFirebaseCart()

  }, [user])

  useEffect( () => {
    const increaseTotal = async () => {
    const totalValue = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);
    const totalNum = parseFloat(totalValue.toFixed(2));
    setTotal(totalNum);
  };
    increaseTotal();

    updateCartInFirestore();
  }, [cart, total])

  return (
    <CartContext.Provider value={{ addToCart, cart, setCart, updateCartInFirestore, handleAmountChange, removeFromCart, userCart, total, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
