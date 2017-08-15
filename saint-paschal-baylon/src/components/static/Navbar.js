import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class Navbar extends Component {
  render() {
    return (

      	<nav id="nav-color" class="navbar fixed-top navbar-toggleable-md navbar-light">

              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse justify-content-center" id="navbarText">
                <ul class="navbar-nav">
                  <li class="nav-item active mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Register</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Weekly Bulletin</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Becoming a Catholic</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Adoration Chapel</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Parish Ministries</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Recorded Homilies</a>
                  </li>
                  <li class="nav-item mx-2 h6 pt-2">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
	    </nav>

    );
  }
}

export default Navbar;
