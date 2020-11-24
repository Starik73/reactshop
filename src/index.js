import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
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