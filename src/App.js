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

const App = () => {

  return (<div className='overflow-hidden'>

    <SidebarProvider>

      <ProductProvider>
      <CartProvider>
      <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
        
      </ProductProvider>
    </SidebarProvider>

  </div>);
};

export default App;
