import React, { Component } from 'react'

const catholicPrayers = {
  'apostles-creed' : 'I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord: Who was conceived by the Holy Spirit, born of the Virgin Mary; suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell; the third day He rose again from the dead; He ascended into heaven, is seated at the right hand of God the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  'our-father' : 'Our Father, Who art in Heaven, hallowed be Thy name; Thy Kingdom come, Thy will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
  'hail-mary' : 'Hail Mary full of Grace, the Lord is with thee. Blessed are thou among women and blessed is the fruit of thy womb Jesus. Holy Mary Mother of God, pray for us sinners now and at the hour of our death Amen. ',
  'glory-be' : 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
  'grace-meals' : 'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.',
  'act-of-love' : 'O Lord God, I love you above all things and I love my neighbor for your sake because you are the highest, infinite and perfect good, worthy of all my love. In this love I intend to live and die. Amen.'
}

const outerDiv = {
  maxWidth: '90%',
  margin: 'auto',
  paddingTop: '20px'
}


const newsContainer = {
  minWidth: '100%',
  margin: '30px 0'
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


class EventsInner extends Component {

  constructor(props) {
    super(props)
    this.state = {scrape: []};
  }

  componentDidMount() {
  	console.log('this.props.option OUTside if inside CompDidMount: ' + this.props.option)

  	if(this.props.option == "news"){

  	console.log('this.props.option INside if inside CompDidMount: ' + this.props.option)

    fetch('/articles')
      .then(res => res.json())
      .then(scrape => this.setState({ scrape }));

    }

    if(this.props.option === "prayer"){
    }
  
  }

  render() {
    return (
    	<div style={outerDiv}> 
    	  <p> TEST FROM INSIDE INNER LOWER COMPONENT </p>
          {this.state.scrape.map(data =>
          <a href={data.link} target="blank">
          <div style={newsContainer} key={data.id}>
            <p>{data.text}</p>
          </div>
          </a>
          )}
        </div>
    );
  }
}

export default EventsInner;