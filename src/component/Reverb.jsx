import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../strings.js';

class Reverb extends Component {
  render() {
    return (
      <div className="trans container"> <hr/> 
          <div className="row">
            <div className="mx-auto d-block">
              <a href={getString("reverbLink")}><img alt="Shop My Store on Reverb" src="https://static.reverb-assets.com/assets/shops/buttons/215x65-black-en-94305bd2b54772f44e046db82a7837d2.png" /></a>
            </div>
          </div>
          <h5 className="text-center">
            {getString("reverbHeader")}
          </h5>
          <p className="text-center">
            {getString("reverbDescription")}
          </p>
          <hr/>
        </div>
      );
  }
}

export default Reverb;
