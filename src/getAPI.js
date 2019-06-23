import React, { Component } from 'react';

class GetApi extends Component {
componentDidMount() { //lifecycle when fetching data (DOM is represented)
	fetch('https://api.unsplash.com/photos/?client_id=' + cred.APP_ID) //describe a fetch method using Promise functionality
		.then(res => res.json()) //transform the call into a JSON object and pass it into state
		.then(data => { //render out each image from the fetched link
			this.setState({ imgs: data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
};
}