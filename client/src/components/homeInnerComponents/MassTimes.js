import React, { Component } from 'react';

const MassTimesOuterContainer = {
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

const massTimesTitle = {

	marginBottom: '3%'
}

// const MassTimesRow = {

// }

const MassTimesDay = {
	minWidth: '40%',
	display: 'inline-block'
}

const MassTimesTime = {
	minWidth: '60%',
	display: 'inline-block'
}


class MassTimes extends Component {
  render() {
    return (    	
		<div style={MassTimesOuterContainer}>
			<div><h2 style={massTimesTitle}>Mass Times</h2></div>
			<div>
				<div style={MassTimesDay}>Sunday</div>
				<div style={MassTimesTime}>7:30am | 9:00am | 10:45am | 12:30pm | Spanish 5:30pm</div>
			</div>
			<div>
				<div style={MassTimesDay}>Monday - Friday</div>
				<div style={MassTimesTime}>6:30am | 8:15am</div>
			</div>
			<div>
				<div style={MassTimesDay}>Saturday</div>
				<div style={MassTimesTime}>8:15am | 5:30pm</div>
			</div>
			<div>Confession and Holy Days</div>
			<div>
				<div style={MassTimesDay}>Saturday Confession</div>
				<div style={MassTimesTime}>3:30pm to 5:00pm | Spanish 8:00pm to 9:00pm</div>
			</div>
			<div>
				<div style={MassTimesDay}>Holy Days and Religious Holidays</div>
				<div style={MassTimesTime}>6:30am | 8:15am | 12:05pm | 7:30pm</div>
			</div>			
		</div> 
    );
  }
}

export default MassTimes;