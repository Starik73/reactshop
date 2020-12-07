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
import Grid from "@material-ui/core/Grid";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
<App />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);