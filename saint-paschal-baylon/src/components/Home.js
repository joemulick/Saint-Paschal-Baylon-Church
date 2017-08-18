import React, { Component } from 'react';
import Welcome from './homeInnerComponents/Welcome.js';
import MassTimes from './homeInnerComponents/MassTimes.js';
import Events from './homeInnerComponents/Events.js';
import CatholicNews from './homeInnerComponents/CatholicNews.js'
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const mainImageStyle = {
  minWidth: '100%',
  height: 'auto',
  borderBottom: '1px solid'
}; 

class Home extends Component {
  render() {
    return (    	
    	<div>

    	<Row className="show-grid">
	    	<Col>
	    		<Image style={mainImageStyle} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1503029655/main-img-ed_muc2g0.jpg" responsive />
	    	</Col>
    	</Row>
    	<Row className="show-grid">

	    		<Col xs={12} md={8}>
	    			<Welcome />
	    			<MassTimes />
	    			<Events />
				</Col>
      			<Col xs={12} md={4}>
      				<CatholicNews />
				</Col>
    	</Row>

    	</div>
    );
  }
}

export default Home;