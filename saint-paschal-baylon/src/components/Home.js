import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';



class Home extends Component {
  render() {
    return (    	
    	<div>

    	<Row className="show-grid">
	    	<Col><p>HomePage</p></Col>
    	</Row>

    	</div>
    );
  }
}

export default Home;