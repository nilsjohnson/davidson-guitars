import React, { Component } from 'react';
import '../css/app.scss';
import Navbar from '../component/Navbar.jsx';
import Landing from '../component/Landing.jsx';
import Reverb from '../component/Reverb.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar />
        <Landing/>
        <Reverb />
        <Footer/>
      </div>
    );
  }
}

export default Home;