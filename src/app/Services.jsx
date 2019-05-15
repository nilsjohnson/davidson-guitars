import React, { Component } from 'react';
import '../css/app.scss';
import Navbar from '../component/Navbar.jsx';
import Landing from '../component/Landing.jsx';
import Reverb from '../component/Reverb.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

import frets from '../img/frets.jpg';
import owen from '../img/owen.jpg';

class Services extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar />
          
          <div className="trans container">
            <hr/>
            <h2 className="text-center">Lutherie Services</h2>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="text-center">Guitar Setup</h4>
                <p>
                  Truss rod, nut slots, string height, intonation, pickup height, etc. Get your acoustic or electric guitar playing right! Partial and full setups depending on what your instrument needs. 
                </p>
                <h4 className="text-center">Fretwork</h4>
                <p>
                  Frets worn out? Section of the fingerboard buzzes a lot? Sharp fret ends? Could be time for some fretwork!
                </p>
                <h4 className="text-center">Repair</h4>
                <p>
                  Should you ever need it, you're covered.
                </p>
                <div className="row">
                <div className="col-6">
                </div><ul>
                    <li>Bridge Reglue</li>
                    <li>Cracks</li>
                    <li>Broken Peghead</li>
                    <li>Glue Joint Failure</li>
                    <li>Loose Soundboard Braces</li>
                    <li>And More...</li>
                  </ul>
                </div>
                
              </div>
              <div className="col-sm-6">
                <img src={owen} className="img-fluid border"/>
              </div>

            </div>
          </div>          
        
        <Footer/>
      </div>
    );
  }
}

export default Services;

/*
<div className="trans container">
            <hr/>
            <h3 className="text-center">The Basics</h3>
            <hr/>
            <div className="row">
              <div className="col-md-6">
                <h4 className="text-center">Guitar Setup</h4>
                <p>
                  Truss rod, nut slots, string height, intonation, pickup height, etc. Get your acoustic or electric guitar playing right! Partial and full setups depending on what your instrument needs. 
                </p>
                <h4 className="text-center">Fretwork</h4>
                <p>
                  Frets worn out? Section of the fingerboard buzzes a lot? Sharp fret ends? Could be time for some fretwork!
                </p>
                <h4 className="text-center">Repair</h4>
                <p>
                  Includes many things. Should you ever need it, you're covered.
                </p>

                <ul>
                    <li>Bridge Reglue</li>
                    <li>Cracks</li>
                    <li>Broken Peghead</li>
                    <li>Glue Joint Failure</li>
                    <li>Loose Soundboard Braces</li>
                    <li>And More...</li>
                  </ul>
                
              </div>
              <div className="col-md-6">
                <img src={frets} className="img-fluid border"/>
              </div>
            </div>
          </div>

          <div className="trans container">
            <hr/>
            <h3 className="text-center">Other Things</h3>
            <hr/>
            <div className="row">  
              <div className="col-md-6">
                <img src={frets} className="img-fluid border"/>
              </div>
              <div className="col-md-6">
                <h4 className="text-center">Restoration</h4>
                <p>
                  At some point, your instrument may need a little more than a setup or some fretwork. Should that ever be the case, Owen Davidson can do that for you too.
                </p>
                <ul>
                  <li>Neck Resets</li>
                  <li>Refinishing</li>
                  <li>Custom Replacement Parts</li>
                </ul>

                <h4 className="text-center">Inlay</h4>
                <p>
                  Owen has extensive experience creating inlaid designs for his customers. If there is something you want on your instrument, bring it in!
                </p>

              </div>
            </div>
          </div>
*/

