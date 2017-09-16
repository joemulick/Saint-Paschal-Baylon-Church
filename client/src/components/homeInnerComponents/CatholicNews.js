import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

const outerDiv = {
  maxWidth: '90%',
  margin: 'auto',
  paddingTop: '20px'
}

const newsTitle = {
  textAlign: 'center'
}

const newsContainer = {
  minWidth: '100%',
  height: '165px',
  margin: '30px 0'
}

const imageResize = {
  height: '75%',
  width: 'auto',
  float: 'left',
  margin: '0 8px 8px 0'
}

class Events extends Component {
  render() {
    return (
        <div style={outerDiv}>
          <h4 style={newsTitle}>Catholic News</h4>
          <div style={newsContainer}>
            <Image style={imageResize} src="https://www.catholicnewsagency.com/images/Eucharist_Credit_wideonet_Shutterstock_CNA.jpg" responsive />
            <p>After three years of ISIS occupation, the Mass returns to Mosul</p>
            <p>Aug 30, 2017 - 06:01 am .- Following the liberation of Mosul, Iraq, from the hands of the Islamic State, Christians are cautiously returning to the city. And as they return, so does the Mass.</p>
          </div>
        </div>
    );
  }
}

export default Events;