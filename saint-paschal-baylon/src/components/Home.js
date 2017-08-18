import React, { Component } from 'react';
import Welcome from './homeInnerComponents/Welcome.js';
import MassTimes from './homeInnerComponents/MassTimes.js';
import Events from './homeInnerComponents/Events.js';
import SaintOfDay from './homeInnerComponents/SaintOfDay.js'
import CatholicNews from './homeInnerComponents/CatholicNews.js'
import HomeImage from './homeInnerComponents/HomeImage.js'
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const OuterDiv = {
  borderStyle: 'solid',

}

class Home extends Component {
  render() {
    return (    	
    	<div style={OuterDiv}>

    	<Row className="show-grid">
	    	<Col md={12}>
	    		<HomeImage />
	    	</Col>
    	</Row>

    	<Row className="show-grid">

	    		<Col xs={12} md={8}>

	    			<Welcome />
	    			<MassTimes />
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