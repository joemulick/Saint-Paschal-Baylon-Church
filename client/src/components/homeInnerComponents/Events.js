import React, { Component } from 'react';

const eventsOuterContainer = {
  borderRight: '1px dashed #fff4ce',
  borderLeft: '1px dashed #fff4ce',
  boxShadow: '0 0 0 3px #8c7341, 0 0 0 5px #fff4ce, 0 0 0 10px #8c7341, 0 0 2px 10px #000000',
  maxWidth: '92%',
  marginTop: '9%',
  marginLeft: '4%',
  marginBottom: '9%',
  padding: '4%',
  lineHeight: '1.5',
  overflow: 'hidden'

}

const EventsTitle ={
    marginLeft: '3%',
    marginBottom: '3%'
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
            <div><h2 style={EventsTitle}>Upcoming Events</h2></div>

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