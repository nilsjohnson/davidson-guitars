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
            </div>

            <div className="col-md-6">
              <h3 className="text-center">Quality Repair and Restoration of all Fretted Instruments</h3>
              <p>
                Owen Davidson is a luthier located Northfield Massachuessets, specializing in guitar resoration, refinishing and custom inlay work. With professional experience since 1989, you can be assured of Owen's commitment to high quality work, knowlege and expertice. // TODO - **figure our what to write here.**  
              </p>

              <h3 className="text-center">Hours</h3>
              <h5>Sunday: Closed</h5>
              <h5>Monday: Closed</h5> 
              <h5>Tuesday -Friday</h5>
              <h5>Sunday</h5>
              <h5>Sunday</h5>
              <h5>Sunday</h5>
              <address>
                <a href="mailto:owen@davidsonguitars.com">owen@davidsonguitars.com </a><br/> 
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