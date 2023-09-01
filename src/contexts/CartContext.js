
import React, { createContext, useContext, useState } from 'react';
import { SidebarContext } from './SidebarContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  
  const addToCart = (product) => {
    const cartItem = cart.find(item => {
      return item.id === product.id;
    });

    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });

      setCart(newCart);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false)
      }, 2500)
    

    } else {
      const newCartItem = { ...product, amount: 1 };
      setCart([...cart, newCartItem]);
      setIsOpen(true)

    }

  };

  const removeFromCart = (id) => {
    const removedCart = cart.filter(item => item.id !==id );
    setCart(removedCart)
  }
  const handleAmountChange = (id, newAmount) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: newAmount };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // Provide the addToCart function and cart state to consuming components
  return (
    <CartContext.Provider value={{ addToCart, cart, setCart, removeFromCart, handleAmountChange }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
