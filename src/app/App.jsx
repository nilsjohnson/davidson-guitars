import React, { Component } from 'react';
import '../css/app.scss';
import Header from '../component/Header.jsx';
import Navbar from '../component/Navbar.jsx';
import Landing from '../component/Landing.jsx';
import Footer from '../component/Footer.jsx';
import Reverb from '../component/Reverb.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <Landing/>

        <Reverb/>

       
        <Footer/>

      </div>
    );
  }
}

export default App;
