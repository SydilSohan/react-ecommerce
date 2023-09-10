import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarProvider from './contexts/SidebarContext';
import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';
import CheckoutPage from './pages/Checkout';
import { db } from './fireBaseConfig';
import SignIn from './components/SignIn';
import UserProvider from "./contexts/UserContext";
import Profile from './pages/Profile';
import OrderProvider from './contexts/OrderContext';
import SingleOrder from './pages/SingleOrder';
import OrderCollection from './pages/OrderCollection';
import Content from './pages/Features';
const App = () => {
console.log(db)
  return (<div className='overflow-hidden'>

   
   
<UserProvider>
   
   
    <SidebarProvider>

      <ProductProvider>
        <CartProvider>  
        <OrderProvider>

      <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrderCollection />} />

            <Route path="/orders/:id" element={<SingleOrder />} />
            <Route path="/features" element={<Content />} />




          </Routes>
          <Footer />
        </BrowserRouter>
        </OrderProvider>
      
      </CartProvider>
      
        
      </ProductProvider>
    </SidebarProvider>
    </UserProvider>

  </div>);
};

export default App;
