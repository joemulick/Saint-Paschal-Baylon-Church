import React, { Component } from 'react';
import Welcome from './homeInnerComponents/Welcome.js';
import MassTimes from './homeInnerComponents/MassTimes.js';
import Events from './homeInnerComponents/Events.js';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const mainImageStyle = {
  minWidth: '100%',
  height: 'auto',
  borderBottom: '1px solid'
}; 

class Home extends Component {
  render() {
    return (    	
    	<div>

    	<Row className="show-grid">
	    	<Col>
	    		<Image style={mainImageStyle} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1503029655/main-img-ed_muc2g0.jpg" responsive />
	    	</Col>
    	</Row>
    	<Row className="show-grid">

	    		<Col xs={12} md={8}>
	    			<Welcome />
	    			<MassTimes />
	    			<Events />
				</Col>
      			<Col xs={12} md={4}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ex sed mi sodales porta. Nulla laoreet rutrum cursus. Praesent arcu magna, aliquam ut posuere lacinia, elementum nec dolor. Sed at tincidunt lectus. Aliquam vehicula neque ut venenatis rhoncus. Pellentesque rhoncus ante et sem pretium interdum. Praesent bibendum turpis ac quam pharetra consequat. Fusce sodales tristique laoreet. Etiam aliquam pulvinar magna et dapibus. Donec fringilla commodo neque quis molestie. Morbi laoreet posuere lorem et mollis. Nam tempor velit vel nisi hendrerit, nec feugiat justo scelerisque.

				Nunc vitae eros et arcu feugiat maximus. Phasellus tellus tortor, euismod eget efficitur at, faucibus at nisi. Donec eu libero mollis, laoreet tortor nec, tempus justo. Sed tincidunt sed est vel vehicula. Vivamus sit amet vulputate lorem, at luctus tellus. In a ante velit. Donec vitae finibus erat, quis laoreet metus. Pellentesque tincidunt pharetra porta. Duis dapibus facilisis felis, sit amet congue elit ultrices ac. Cras imperdiet arcu felis, in pulvinar est convallis non.

				Pellentesque euismod, erat sit amet pharetra faucibus, velit lectus iaculis ante, in tempus leo odio at odio. Nunc id lorem tincidunt, scelerisque odio non, iaculis leo. Pellentesque placerat commodo rutrum. Integer sagittis sit amet diam id varius. Nunc aliquam sed sapien vitae laoreet. Proin eleifend dignissim bibendum. Ut eget faucibus velit. Nulla sed nunc malesuada ante semper lobortis ac vel urna. Nam semper lectus a libero pulvinar tincidunt. In mauris est, viverra et leo ut, euismod eleifend eros. Suspendisse semper justo ut urna eleifend, at tristique urna lobortis.

				Praesent non dui a felis placerat aliquet. Aliquam lacinia aliquet tincidunt. Morbi laoreet ligula eu fermentum imperdiet. Mauris volutpat, tortor quis suscipit auctor, risus odio imperdiet dui, ut tincidunt ante tortor porta velit. Maecenas pulvinar libero id ligula hendrerit, quis convallis nibh bibendum. Phasellus tincidunt in libero at venenatis. Praesent vitae massa scelerisque, accumsan dolor ac, varius libero. Nullam purus leo, venenatis quis dictum quis, condimentum nec risus. Phasellus suscipit dapibus finibus. Praesent eleifend condimentum nisi sit amet ultricies. Nullam sit amet arcu sed turpis vehicula pulvinar. Nulla sollicitudin orci quis facilisis porttitor. Curabitur vel magna consectetur, aliquam nibh rhoncus, ultricies elit. Donec sed finibus leo. Etiam a justo dapibus, feugiat erat sed, finibus diam. Donec placerat hendrerit ligula at iaculis.

				Aenean eleifend venenatis odio et malesuada. Sed condimentum quam nec augue imperdiet, non ullamcorper elit pharetra. Phasellus vitae congue tortor, vel molestie ex. Nam dignissim nunc et dolor vulputate ornare. Etiam volutpat, justo vitae placerat laoreet, nisi augue malesuada nisl, sed vehicula justo nisi eget massa. Praesent rhoncus nisi vel commodo sagittis. Nam id ligula aliquet tortor blandit faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque felis vel iaculis eleifend. Etiam volutpat odio tellus, a scelerisque orci interdum nec.</p>
				</Col>
    	</Row>

    	</div>
    );
  }
}

export default Home;