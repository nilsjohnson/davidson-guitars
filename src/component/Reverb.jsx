import React, { Component } from 'react';
import '../css/app.scss';

class Reverb extends Component {
  render() {
    return (
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
      );
  }
}

export default Reverb;
