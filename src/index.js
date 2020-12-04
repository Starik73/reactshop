import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Products from './components/Products';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Route exact path="/" component={Brands} />
      <Route exact path="/products" component={Products} />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);