import React, { Component } from 'react';

const MassTimesOuterContainer = {
	marginTop: '5%',
	marginLeft: '10%'
}

// const MassTimesRow = {

// }

const MassTimesDay = {
	maxWidth: '40%',
	display: 'inlineBlock'
}

const MassTimesTime = {

}


class MassTimes extends Component {
  render() {
    return (    	
		<div style={MassTimesOuterContainer}>
			<div>Mass Times</div>
			<div>
				<div>Sunday</div>
				<div>7:30am | 9:00am | 10:45am | 12:30pm (Spanish), 5:30pm</div>
			</div>
			<div>
				<div>Monday - Friday</div>
				<div>6:30 AM | 8:15 AM</div>
			</div>
			<div>
				<div>Saturday</div>
				<div>8:15am | 5:30pm</div>
			</div>
			<div>Confession and Holy Days</div>
			<div>
				<div>Confession</div>
				<div>Saturday: 3:30 PM to 5:00 PM (Language: Spanish), 8:00 PM to 9:00 PM</div>
			</div>
			<div>
				<div>Holy Days</div>
				<div>Weekdays: 6:30 AM | 8:15 AM | 12:05 PM | 7:30 PM</div>
			</div>			
		</div> 
    );
  }
}

export default MassTimes;