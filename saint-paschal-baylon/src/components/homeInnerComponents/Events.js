import React, { Component } from 'react';

const eventsOuterContainer = {
	borderStyle: '1px solid',
	margin: '2%'

}

const eventOneContainer = {
	borderStyle: '1px solid'
}

const eventTwoContainer = {
	borderStyle: '1px solid'
}

const eventThreeContainer = {
	borderStyle: '1px solid'
}

class Events extends Component {
  render() {
    return (    	
    	<div style={eventsOuterContainer}>
    		<div><h2>Upcoming Events</h2></div>

    		<div style={eventOneContainer}>
	    		<div>Event 1</div>
	    		<div>Event 1 Details</div>
    		</div>
    		<div style={eventTwoContainer}>
	    		<div>Event 2</div>
	    		<div>Event 2 Details</div>
    		</div>
    		<div style={eventThreeContainer}>
	    		<div>Event 3</div>
	    		<div>Event 3 Details</div>
    		</div>      		    	
    	</div>	
    );
  }
}

export default Events;