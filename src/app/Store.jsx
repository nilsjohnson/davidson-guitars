import React, { Component } from 'react';
import '../css/app.scss';
import '../css/reverb.css';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import _RRR from '../util/util.js';
import {getString} from '../util/data.js';


class Store extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Header/>
        <Navbar
            activePage="store"
          />  

        <div className="container trans well">
         <div
            data-reverb-embed-listings
            data-reverb-search-shop={getString("reverbSlug")}
            data-reverb-search-per-page="50"
            data-reverb-currency="USD">
          </div>
        </div>

        <Footer/>
      </div>
      
    );
  }
}

export default Store;