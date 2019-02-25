import React, { Component } from 'react';

class GetApi extends Component {
componentDidMount() {
	fetch('https://api.unsplash.com/photos/?client_id=' + cred.APP_ID)
		.then(res => res.json())
		.then(data => {
			this.setState({ imgs: data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
};
}