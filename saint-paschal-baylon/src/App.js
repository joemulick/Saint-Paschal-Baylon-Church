import React, { Component } from 'react';
import Home from './components/Home.js';
import BecomeCatholic from './components/BecomeCatholic.js';
import GetInvolved from './components/GetInvolved.js';
import ContactUs from './components/ContactUs.js';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid} from 'react-bootstrap';

/* Styling */

const navBarStyle = {
	marginBottom: '0px'
};


/* Styling End */

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar style={navBarStyle} collapseOnSelect>
						<Navbar.Header>

							<Navbar.Brand>
							    	<Link to='/'>Saint Paschal Baylon</Link>
							</Navbar.Brand>

							<Navbar.Toggle />

						</Navbar.Header>
							<Navbar.Collapse>
							  <Nav>
							  	<LinkContainer to="/becoming-catholic">
							    	<NavItem eventKey={1}>Becoming Catholic</NavItem>
							    </LinkContainer>

							    <LinkContainer to="#">
							    	<NavItem eventKey={2}>Mass Times</NavItem>
							    </LinkContainer>

							    <LinkContainer to="#">
							    	<NavItem eventKey={3}>Upcoming Events</NavItem>
							    </LinkContainer>

							    <NavDropdown eventKey={3} title="Church Amenities" id="basic-nav-dropdown">
							      <MenuItem eventKey={3.1}>Adoration Chapel</MenuItem>
							      <MenuItem eventKey={3.2}>Confession</MenuItem>
							      <MenuItem eventKey={3.3}>Crying Room</MenuItem>
							    </NavDropdown>
							  </Nav>

							  <Nav pullRight>
							  	<LinkContainer to="/get-involved">
							  		<NavItem eventKey={1}>Get Involved</NavItem>
							  	</LinkContainer>
							  	<LinkContainer to="/contact-us">
							    	<NavItem eventKey={2}>Contact Us</NavItem>
							    </LinkContainer>
							  </Nav>
						</Navbar.Collapse>
					</Navbar>
				<Grid>

				<Route exact path="/" component={Home}/>
		        <Route path="/becoming-catholic" component={BecomeCatholic}/>
		        <Route path="/get-involved" component={GetInvolved}/>
		        <Route path="/contact-us" component={ContactUs}/>

		        </Grid>
				</div>
			</Router>
		);
	}

}

export default App;
