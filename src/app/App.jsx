import React, { Component } from 'react';
import '../css/app.scss';
import sample from '../img/sample.jpg';
import Header from '../component/Header.jsx';
import Navbar from '../component/Navbar.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>

        <div className="container"> <hr/> 
          <div className="row">
            <div className="col-md-6">
              <img src={sample} className="img-fluid border"/>
              <h5>Just a Sample Image</h5>
            </div>

            <div className="col-md-6">
              <h3 className="text-center">About</h3>
              <p>
                Owen Davidson is a luthier located Northfield Massachuessets, specializing in guitar resoration, refinishing and custom inlay work. With professional experience since 1989, you can be assured of Owen's commitment to high quality work, knowlege and expertice. // TODO - **figure our what to write here.**  
              </p>

              <h3 className="text-center">Services</h3>
              <span>In addition to guitars, Owen Davidson work on all kinds of fretted instrments such as the mandolin, bouzouki, balalaika and oud.  Please see <a href="#">Services</a> for details.</span>
              <ul>
                <li>Instrument Resortation</li>
                <li>Refrets/fretwork</li>
                <li>Setups</li>
                <li>Custom Inlay</li>
                <li>Refinishing</li>
                <li>Electric Guitar Wiring</li>
              </ul>


              <h3 className="text-center">Contact</h3>
              <address>
                <a href="mailto:webmaster@example.com">Owen@whateveremail.com</a><br/> 
                (413) 498-4400 <br/>
                62A Main St. <br/>
                Northfield, MA 01260<br/>
              </address>

            </div>
          </div>
        </div>

        <div className="container"> <hr/> 
          <div className="row">
            <div class="mx-auto d-block">
              <a href="https://reverb.com/shop/nils-guitars-and-mandolins"><img alt="Shop My Store on Reverb" src="https://static.reverb-assets.com/assets/shops/buttons/215x65-black-en-94305bd2b54772f44e046db82a7837d2.png" /></a>
            </div>
          </div>
          <h5 className="text-center">
            Consider giving your your shop a store online! 
          </h5>
          <p className="text-center">
            Although you cant really sell lutherie services here, it increases visibility and can direct people to your shop.
          </p>
          <hr/>
        </div>


       
        <footer>
          <p className="text-center">Davidson Guitars - 2019 &copy; </p> 
        </footer>

      </div>
    );
  }
}

export default App;
