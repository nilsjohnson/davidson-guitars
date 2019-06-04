import React, { Component } from 'react';
import '../css/app.scss';
import sample from '../img/sample.jpg';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import Blerb from './Blerb.jsx';
import Reverb from './Reverb.jsx';
import Facebook from './Facebook.jsx';
import BlogSelector from './blog/BlogSelector.jsx';
import { getString, getCarouselImages } from '../util/strings.js';
import Services from './Services.jsx';
import MyCarousel from './MyCarousel.jsx';


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
              let thing = ["hi", "bryn"];
              console.log(thing);
              console.log(data);  
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
    if(getString("message") != "") {
      message =  <div className="trans container"> <hr/>
          <h4 className="text-center">{getString("message")}</h4>
          <hr/>
        </div>;
    }
    return (
      <div>

        {message}   
        
        <div className="container trans well"> 
          <div className="row">
            <div className="col-md-6">
              <MyCarousel
                images={this.state.carouselImages}
              />
            </div>
            <div className="col-md-6">
              <Blerb/>
              <Hours/>
              <Contact/>
            </div>
          </div>
        </div>

        <div className="container trans well">
          <h1 className="text-center">The Shop</h1>
          <div className="row">
            <div className="col-md-6">
              <Services/>
            </div>
            <div className="col-md-6 line-left">
              <BlogSelector
                maxResults={4}
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