import React, { Component } from 'react';
import Welcome from './homeInnerComponents/Welcome.js';
import MassTimes from './homeInnerComponents/MassTimes.js';
import Events from './homeInnerComponents/Events.js';
import SaintOfDay from './homeInnerComponents/SaintOfDay.js'
import CatholicNews from './homeInnerComponents/CatholicNews.js'
// import { LinkContainer } from 'react-router-bootstrap';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


const outerDiv = {
    // borderStyle: 'solid',

}

const hrHome = { 
    border: '0',
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
} 

class Home extends Component {


  render() {
    return (
    	<div style={outerDiv}>

    	<Row className="show-grid">

	    		<Col xs={12} md={8}>

	    			<Welcome />

            <hr style={hrHome} />

	    			<MassTimes />

            <hr style={hrHome} />

	    			<Events />

				</Col>

      		<Col xs={12} md={4}>
          
            <SaintOfDay />
      			<CatholicNews />

				</Col>

    	</Row>

    	</div>

    );
  }
}

export default Home;