import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

const saints = [{
	'name' : 'St. Francis of Assisi',
	'image': 'https://res.cloudinary.com/ddsihrmda/image/upload/v1503775501/st-francis-of-assisi_euu2xw.jpg',
	'birthyear': '1181',
	'birthLocation' : 'Italy',
	'url' : 'https://www.britannica.com/biography/Saint-Francis-of-Assisi',
	'youtubeurl' : 'https://www.youtube.com/watch?v=qYynL7fH0P8',
	'bio': 'Saint Francis of Assisi, Italian San Francesco d’Assisi, baptized Giovanni, renamed Francesco, original name Francesco di Pietro di Bernardone (born 1181/82, Assisi, duchy of Spoleto [Italy]—died October 3, 1226, Assisi; canonized July 16, 1228; feast day October 4) founder of the Franciscan orders of the Friars Minor (Ordo Fratrum Minorum), the women’s Order of St. Clare (the Poor Clares), and the lay Third Order. He was also a leader of the movement of evangelical poverty in the early 13th century. His evangelical zeal, consecration to poverty, charity, and personal charisma drew thousands of followers. Francis’s devotion to the human Jesus and his desire to follow Jesus’ example reflected and reinforced important developments in medieval spirituality.'
	},{

	'name': 'St. Christopher',
	'image': 'https://res.cloudinary.com/ddsihrmda/image/upload/v1503776295/st-christopher_hwioso.jpg',
	'birthyear': '3rd century',
	'birthLocation' : 'Canaan',
	'url': 'https://www.britannica.com/biography/Saint-Christopher',
	'youtubeurl': 'https://www.youtube.com/watch?v=cXI9z6Iu22A',
	'bio': 'Saint Christopher, (flourished 3rd century; Western feast day July 25; Eastern feast day May 9), patron saint of travelers and, in the 20th century, of motorists, one of the Fourteen Holy Helpers. Though one of the most popular saints, there is no certainty that he existed historically. According to the Roman martyrology, he died in Lycia under the Roman emperor Decius (c. 250). He is the hero of many later legends, which represent him as a giant who, after being converted, devoted his life to carrying travelers across a river.'


	},{

	'name': 'St. Teresa of Avila',
	'image': 'https://res.cloudinary.com/ddsihrmda/image/upload/v1503776409/st-teresa-of-avila_zs3kuq.jpg',
	'birthyear': '1515',
	'birthLocation' : 'Avila, Spain',
	'url': 'https://www.britannica.com/biography/Saint-Teresa-of-Avila',
	'youtubeurl': 'https://www.youtube.com/watch?v=o-ZqQD4F-4s',
	'bio': 'Saint Teresa of Ávila, also called Saint Teresa of Jesus, original name Teresa de Cepeda y Ahumada (born March 28, 1515, Ávila, Spain—died October 4, 1582, Alba de Tormes; canonized 1622; feast day October 15), Spanish nun, one of the great mystics and religious women of the Roman Catholic church, and author of spiritual classics. She was the originator of the Carmelite Reform, which restored and emphasized the austerity and contemplative character of primitive Carmelite life.'

	},{

	'name': 'St. Anthony of Padua',
	'image': 'https://res.cloudinary.com/ddsihrmda/image/upload/v1503776994/st-anthony-of-padua_j1ferb.jpg',
	'birthyear': '1195',
	'birthLocation' : 'Lisbon, Portugal',
	'url': 'https://www.britannica.com/biography/Saint-Anthony-of-Padua',
	'youtubeurl': 'https://www.youtube.com/watch?v=AAJTsxi6Oj0',
	'bio': 'St. Anthony of Padua, Anthony also spelled Antony, Italian Sant’Antonio da Padova, original name Fernando Martins de Bulhões (born 1195, Lisbon, Portugal—died June 13, 1231, Arcella, Verona [now in Italy]; canonized 1232; feast day June 13), Franciscan friar, doctor of the church, and patron of the poor. Padua and Portugal claim him as their patron saint, and he is invoked for the return of lost property.'

	}]

const sodOuter = {
	height: 'auto',
	width: '100%',
	marginTop: '15%'
}

const sodTitleDiv = {
	width: '100%',
	marginBottom: '10px'
}

const sodTitle = {
	width: '100%',
	textAlign: 'center',
	marginBottom: '35px'
}

const sodBody = {
	width: '100%'
}

const sodImage = {
	width: 'auto%',
	maxHeight: '260px'
}

const stMid = {
	width: '100%',
	height: '290px',
	position: 'relative'
}

const stLower = {
	width: '96%',
	maxHeight: '160px',
	overflowY: 'scroll',
	marginBottom: '25px'
}

const stLinkTube = {

}

const stLeftInnerInner = {
	display: 'inline-block',
	marginTop: '20px',
	minWidth: '50%'
}

const stLeftInnerInnerInner = {

}

const stLeftInnerInnerInnerMid = {
	margin: '25px auto'
}

const stRightInnerInner = {
	display: 'inline-block',
	maxWidth: '45%',
	verticalAlign: 'top',
	position: 'absolute',
	right: '10%'
}

const stBio = {
	margin: '3% 6% 3%'
}

const stInfo = {
	textAlign: 'center',
	fontSize: '1.2em',
	margin: '5px auto'
}

const stName = {
	textAlign: 'center',
	fontSize: '1.5em'
}

const hrStat = {
	width: '60%',
	margin: '0px auto'
}

const hrBioStat = {
	margin: '0px 0 5px',
	width: '17%',
	marginLeft: '8%'
}

const stBioInfo = {
	fontSize: '1.2em',
	margin: '5px auto',
	marginLeft: '13.5%'
}



class SaintOfDay extends Component {

  constructor() {

    super()

    this.state = {
      name : saints[0].name,
      image: saints[0].image,
      birthyear: saints[0].birthyear,
      birthLocation: saints[0].birthLocation,
      url: saints[0].url,
      youtubeurl: saints[0].youtubeurl,
      bio: saints[0].bio
    };
  }

  render() {
    return (
    	<div style={sodOuter}>
    		<div style={sodTitleDiv}>
    				<h4 style={sodTitle}>Holy Person of the day</h4>
    		</div>
    		<div style={stMid}>
    			<div style={stLeftInnerInner}>
    					<div style={stLeftInnerInnerInner}>
        			 		<p style={stName}>{this.state.name}</p>
        			 	</div>
        			 	<div style={stLeftInnerInnerInnerMid}>
        			 		<p style={stInfo}>Birth Year</p>
        			 		<hr style={hrStat} />
        			 		<p style={stInfo}>{this.state.birthyear}</p>
        			 	</div>
        			 	<div style={stLeftInnerInnerInner}>
        			 		<p style={stInfo}>Birth Location</p>
        			 		<hr style={hrStat} />
        			 		<p style={stInfo}>{this.state.birthLocation}</p>
        			 	</div>
    			</div>
    			<div style={stRightInnerInner}>
    					<Image style={sodImage} src={this.state.image} responsive />
    			</div>
    		</div>
    		<div style={stLower}>
    				<p style={stBioInfo}>Bio</p>
    				<hr style={hrBioStat} />
    				<p style={stBio}>{this.state.bio}</p>
    		</div>

    	</div>
    );
  }
}

export default SaintOfDay;