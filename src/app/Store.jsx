import React, { Component } from 'react';
import '../css/app.scss';
import '../css/reverb.css';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import _RRR from '../util/util.js';
import {getResource} from '../util/data.js';
import Reverb from '../component/Reverb.jsx';


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

        <div className="container well trans">
          <h3 className="text-center">{getResource("storeHeader")}</h3>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <Reverb/>
            </div>
            <div className="col-md-6 line-left">
              <p>
                {getResource("storeParagraph")} 
              </p>  
            </div>
          </div>
        </div>

        <div className="container trans well">
          <div
            data-reverb-embed-listings
            data-reverb-search-shop={getResource("reverbSlug")}
            data-reverb-search-per-page="12"
            data-reverb-currency="USD">
          </div>
        </div>

        <Footer/>
      </div>
      
    );
  }
}

export default Store;