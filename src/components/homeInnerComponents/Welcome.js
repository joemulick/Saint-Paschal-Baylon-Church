import React, { Component } from 'react';

const welcomBorderStyle = {
  borderRight: '1px dashed #ddd',
  borderLeft: '1px dashed #ddd',
  boxShadow: '0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee',
  maxWidth: '80%',
  marginTop: '10%',
  marginLeft: '10%',
  marginBottom: '10%',
  padding: '4%',
  lineHeight: '1.5',
  overflow: 'hidden'
}

const welcomeMessageSignature = {
  float: 'right',
  marginRight: '2%',
  display: 'inline-block',
}





class Welcome extends Component {
  render() {
    return (  

    	<div style={welcomBorderStyle}>
        <div>
      	<p>Welcome to our Saint Paschal Baylon Community. Saint Paschal’s is a vibrant community of nearly 6000 families. We were founded in 1960 and so we have been serving the people of the Conejo Valley for over 55 years. I hope that you find valuable information here on our website. Please know that St. Paschal’s is here to serve you to the best of our ability. Please feel free to contact me or the other clergy and staff to assist you. Saint Paschal’s is a community where all are welcome. Please join us for our celebrations. We would love to have you as members of our parish family. God bless you and all your loved ones.</p>

  			<div style={welcomeMessageSignature}>With every good wish,<br/>
  			Father Michael Rocha, Pastor</div>
        </div>
    	</div>  	
    	
    );
  }
}

export default Welcome;