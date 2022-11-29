import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import './assets/css/styles.css';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
