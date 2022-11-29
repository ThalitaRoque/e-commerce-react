import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Product from '../components/Product';
import Register from '../components/Register';
import Login from '../components/Login';
import Footer from '../components/Footer';
import './../assets/css/styles.css';


// import Shop from '../pages/Shop';
// import ProductView from '../pages/ProductView';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/products/:id" element={<Product />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

        </BrowserRouter>
              
    </>
  )
}

export default AppRoutes