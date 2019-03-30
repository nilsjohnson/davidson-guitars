import React, { Component } from 'react';
import '../css/app.scss';
import sample from '../img/sample.jpg';


class Landing extends Component {
  render() {
    return (
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
      );
  }
}

export default Landing;