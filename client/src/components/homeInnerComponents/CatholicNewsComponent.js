import React, { Component } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'
import CatholicNewsLowerInnerContainer from './catholicNewsInnerComponents/catholicNewsInnerLowerComponent.js'


const buttonDiv = {
  marginTop: '65px'
}
    

class Events extends Component {

  constructor(props) {

    super(props)
    this.state = {option: 'news'}

    this.handleClick = this.handleClick.bind(this)

  }

  // componentDidMount() {
  //   console.log("This is what this.state looks like from component did mount in catholic news outer componenet: " + this.state.option)
  // }

  handleClick(event) {

    event.preventDefault()

    this.setState({
      option: event.target.getAttribute('data-value')
    });

    console.log(this.state.option)
  }


  render() {
    return (
      <div>
        <div style={buttonDiv}>
          <ButtonGroup justified>
            <Button href="#" data-value="news" onClick={this.handleClick}>Catholic News</Button>
            <Button href="#" data-value="prayer" onClick={this.handleClick}>Catholic Prayers</Button>
          </ButtonGroup>
        </div>
        <div>
          <CatholicNewsLowerInnerContainer option={this.state.option} />
        </div>
      </div>
    );
  }
}

export default Events;