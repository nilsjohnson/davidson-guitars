import React, { Component } from 'react';
import '../css/app.scss';
import sample from '../img/sample.jpg';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import DAO from '../data/DAO.js';
import Blerb from './Blerb.jsx';
import Reverb from './Reverb.jsx';
import Facebook from './Facebook.jsx';
import BlogSelector from './blog/BlogSelector.jsx';
import { getString } from '../util/strings.js';


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
          <hr/>
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
          <hr/>
        </div>

        <div className="container trans"> <hr/> 
          <div className="row">
            <div className="col-md-6">
              <h4>Instrument Services</h4>
              <ul>
                <li><strong>Acoustic and Electric Guitar Setup</strong> - action, truss rods, intonation, etc.</li>
                <li><strong>Pickup Installation</strong> - for electric and acoustic</li>
                <li><strong>Fretwork</strong> - leveling, polishing, end dressing, etc.</li>
              </ul>

              <h4>Repairs</h4>
              <ul>
                <li><strong>Bridge Re-gluing</strong> - steel string, classical, 12 string</li>
                <li><strong>Crack Repair</strong> - for cracks in soundboards, sides, backs, etc.</li>
                <li><strong>Electronic Repair</strong> - output jacks, pots, general wiring issues, etc.</li>
                <li><strong>Neck Resets</strong> - dovetail, bolt-on, mortise/tenons, etc.</li>
                <li><strong>Broken Necks, Peg-heads</strong> - cracked necks, peg-heads, heel-blocks, etc.</li>
              </ul>
              <h4>Restorations</h4>
              <ul>
                <li><strong>Knowledgeable Evaluations</strong> - restore your instrument appropriately</li>
                <li><strong>Accurate Part Replication</strong> - bridges, fingerboards, binding, rosettes, etc.</li>
                <li><strong>Refinishing</strong> - french polishing, lacquers, touch-ups, etc.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <Reverb/>
              <hr/>
              <h4 className="text-center">Recent Blog Posts</h4>
              <BlogSelector
                maxResults={5}
                />
              <a href="/blog">See More</a>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Landing;