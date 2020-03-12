import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
    state = {
        name: '',
        email: '',
        userId: '',
        picture: '',
        isLoggedIn: false,
    }

    responseFacebook = response => {
        // console.log(response);
    
        this.setState({
          isLoggedIn: true,
          userID: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url
        });
      };

    componentClicked = () => console.log('Clicked');

    render() {
        let fbcontent;
        if(this.state.isLoggedIn) {
            fbcontent = (
                <div
                style={{
                    width: "400px",
                    margin: "auto",
                    background: "#f4f4f4",
                    padding: "20px"
                }}
                >
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            );
        }else {
            fbcontent = (
                <FacebookLogin
                    appId="2717646638291021"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }
        return(
            <div>
                {fbcontent}
            </div>
        )
    }
}