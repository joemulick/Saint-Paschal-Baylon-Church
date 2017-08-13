import React, { Component } from 'react';
import './stylesheets/base/App.css';
import Navbar from './components/static/Navbar.js';
import Footer from './components/static/Footer.js';
import Main from './components/static/Main.js';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Navbar />
          <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
