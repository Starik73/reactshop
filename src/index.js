import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Products from './components/Products';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Brands />
    <Products />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);