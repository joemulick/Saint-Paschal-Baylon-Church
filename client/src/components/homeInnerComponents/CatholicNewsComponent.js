import React, { Component } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'


const buttonDiv = {
  marginTop: '65px'
}


        /*

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
            margin: '30px 0'
          }

          state = {scrape: []}

          componentDidMount() {
            fetch('/articles')
              .then(res => res.json())
              .then(scrape => this.setState({ scrape }));
          }

        <div style={outerDiv}>
          <h4 style={newsTitle}>Catholic News</h4>
          {this.state.scrape.map(data =>
          <a href={data.link} target="blank">
          <div style={newsContainer} key={data.id}>
            <p>{data.text}</p>
          </div>
          </a>
          )}
        </div>

        */

class Events extends Component {

  constructor(props) {
    super(props)
    this.state = {option: 'news'}
  }

  handleClick(event) {

    event.preventDefault()

    this.setState({
      option: event.target.getAttribute('data-value')
    });
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
        </div>
      </div>
    );
  }
}

export default Events;