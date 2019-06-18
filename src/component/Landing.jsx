import React, { Component } from 'react';
import '../css/app.scss';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import Blerb from './Blerb.jsx';
import Reverb from './Reverb.jsx';
import BlogSelector from './blog/BlogSelector.jsx';
import { getResource, getCarouselImages } from '../util/data.js';
import Services from './Services.jsx';
import MyCarousel from './MyCarousel.jsx';
import Brands from './Brands.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      description: "",
      carouselImages: []
    };

    let callback = this.setCarouselImages;
    getCarouselImages().then(function(response){
        if(response.ok) {
            response.json().then(data => { 
              callback(data);
          });
        }
        else {
          console.log("problem fetching carousel images");
        } 
      });
  }

  setCarouselImages = (images) => {
    this.setState({carouselImages: images})
  }

  setBlerb = (blerb) => {
    this.setState({description: blerb.description});
    this.setState({header: blerb.header});
  }

  render() {

    let message;
    if(getResource("message") != "") {
      message =  <div className="trans container well">
          <h4 className="text-center">{getResource("message")}</h4>
        </div>;
    }
    return (
      <div>

        {message}   
        
        <div className="container trans well">
          <div className="row">
            <div className="col-xl-6 well">
              <MyCarousel
                images={this.state.carouselImages}
              />
            </div>
            <div className="col-xl-6 well">
              <Blerb/>
              <Hours/>
              <Contact/>
            </div>
          </div>
        </div>

        <div className="container trans well">
          <h1 className="text-center">The Shop</h1>
          <div className="row">
            <div className="col-md-6" id="landing-left">
              <Services/>
              <hr/>
              <div className="brands-container">
                <div className="vertical-center">
                  <Brands/>
                </div>
              </div>  
              <hr/>
            </div>
            <div className="col-md-6 line-left">
              <BlogSelector
                maxResults={2}
                />
                <a href="/blog">See More</a>
            </div>
          </div>
        </div>

        <div className="container trans well">
          <Reverb/>
        </div>
       
      </div>
      );
  }
}

export default Landing;