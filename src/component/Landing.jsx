import React, { Component } from 'react';
import '../css/app.scss';
import sample from '../img/sample.jpg';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import DAO from '../data/DAO.js';
import Blerb from './Blerb.jsx';
import {getString, Strings} from '../Strings.js';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      description: ""
    };
  }

  setBlerb = (blerb) => {
    this.setState({description: blerb.description});
    this.setState({header: blerb.header});
  }


  render() {

    let message;
    if(getString("message") != "") {
      message =  <div className="trans container"> <hr/>
          <h4 className="text-center">{getString("message")}</h4>
        </div>;
    }
    return (
      <div>

        {message}   
        
        <div className="container trans"> <hr/> 
            <div className="row">
              <div className="col-md-6">
                <img src={sample} className="img-fluid border"/>
              </div>
              <div className="col-md-6">
                <Blerb/>
                <Hours/>
                <Contact/>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Landing;