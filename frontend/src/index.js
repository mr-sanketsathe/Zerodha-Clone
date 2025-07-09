import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import HomePage from './Landing_page/Home/HomePage';
import AboutPage from './Landing_page/About/AboutPage';
import SignupPage from './Landing_page/SignUp/Signup';
import ProductsPage from './Landing_page/Products/ProductsPage';
import PricingPage from './Landing_page/Pricing/PricingPage';
import SupportPage from './Landing_page/Support/SupportPage';
import LoginPage from './Landing_page/login/login';
import NotFound from './Landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Products' element={<ProductsPage/>}/>
      <Route path='/Pricing' element={<PricingPage/>}/>
      <Route path='/Support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


