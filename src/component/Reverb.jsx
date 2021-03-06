import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';

class Reverb extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="mx-auto d-block">
            <a href={"https://reverb.com/shop/" + getResource("reverbSlug")}>
              <img 
                alt="Shop My Store on Reverb" 
                src="https://static.reverb-assets.com/assets/shops/buttons/215x65-black-en-94305bd2b54772f44e046db82a7837d2.png"
              />
            </a> 
          </div> 
        </div>
        <br/>
        <a href={"https://reverb.com/shop/" + getResource("reverbSlug")}>
          <h4 className="text-center">{getResource("reverbHeader")}</h4> 
        </a>
      </div>
      );
  }
}

export default Reverb;


