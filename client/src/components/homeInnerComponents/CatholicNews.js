import React, { Component } from 'react'
// import { Image } from 'react-bootstrap'

// const outerDiv = {
//   maxWidth: '90%',
//   margin: 'auto',
//   paddingTop: '20px'
// }

     /*   

        <div style={outerDiv}>
          <h4 style={newsTitle}>Catholic News</h4>
          <div style={newsContainer}>
            <Image style={imageResize} src="https://www.catholicnewsagency.com/images/Eucharist_Credit_wideonet_Shutterstock_CNA.jpg" responsive />
            <p>After three years of ISIS occupation, the Mass returns to Mosul</p>
            <p>Aug 30, 2017 - 06:01 am .- Following the liberation of Mosul, Iraq, from the hands of the Islamic State, Christians are cautiously returning to the city. And as they return, so does the Mass.</p>
          </div>
        </div>

      */

// const newsTitle = {
//   textAlign: 'center'
// }

// const newsContainer = {
//   minWidth: '100%',
//   height: '165px',
//   margin: '30px 0'
// }

// const imageResize = {
//   height: '75%',
//   width: 'auto',
//   float: 'left',
//   margin: '0 8px 8px 0'
// }



class Events extends Component {

  state = {scrape: []}

  componentDidMount() {
    fetch('/scrape')
      .then(res => res.json())
      .then(scrape => this.setState({ scrape }));
  }

  render() {
    return (

        <div>
        <h1>Users</h1>
        {this.state.scrape.map(data =>
          <div key={data.id}>{data}</div>
        )}
        </div>
    );
  }
}

export default Events;