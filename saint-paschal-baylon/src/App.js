import React, { Component } from 'react';
import './stylesheets/base/App.css';
import Home from './components/Home.js';
import BecomeCatholic from './components/BecomeCatholic.js';
import GetInvolved from './components/GetInvolved.js';
import ContactUs from './components/ContactUs.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

/* Styling */

let noStyle = {
  textDecoration: 'none',
};



/* Styling End */

class App extends Component {
	render() {
		return (
			<Router>
				<div>

					<Navbar collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
							    <Link to = "/">Saint Paschal Baylon</Link>
							</Navbar.Brand>

							<Navbar.Toggle />
						</Navbar.Header>
							<Navbar.Collapse>
							  <Nav>
							    <NavItem eventKey={1}><Link to="/becoming-catholic" style={noStyle}>Becoming Catholic</Link></NavItem>
							    <NavItem eventKey={2}>Mass Times</NavItem>
							    <NavItem eventKey={3}>Upcoming Events</NavItem>

							    <NavDropdown eventKey={3} title="Church Amenities" id="basic-nav-dropdown">
							      <MenuItem eventKey={3.1}>Adoration Chapel</MenuItem>
							      <MenuItem eventKey={3.2}>Confession</MenuItem>
							      <MenuItem eventKey={3.3}>Crying Room</MenuItem>
							    </NavDropdown>

							  </Nav>
							  <Nav pullRight>
							  	<NavItem eventKey={1}><Link to="/get-involved">Get Involved</Link></NavItem>
							    <NavItem eventKey={2}><Link to="/contact-us">Contact Us</Link></NavItem>
							  </Nav>
						</Navbar.Collapse>
					</Navbar>

				<Route exact path="/" component={Home}/>
		        <Route path="/becoming-catholic" component={BecomeCatholic}/>
		        <Route path="/get-involved" component={GetInvolved}/>
		        <Route path="/contact-us" component={ContactUs}/>

				</div>
			</Router>
		);
	}

}

export default App;
