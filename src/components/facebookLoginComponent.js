import React from 'react'
import FacebookLogin from 'react-facebook-login';

class FaceBookLogin extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.responseFacebook = this.responseFacebook.bind(this);
		this.componentClicked = this.componentClicked.bind(this);
		this.state = { handler: props.handler }


	}
	shouldComponentUpdate() {
		return true;
	}

	responseFacebook(response) {
		if(response.accessToken && !this.state.response) {
			this.setState({
					response: response
				},
				//.addEventListener('click', function(e) { })
			)
		}
	}


	componentClicked(e) {
		if(this.state.response) {
			this.state.handler(this.state.response, "facebook", true);
		}
	}

	render() {

		return(



			<FacebookLogin
			    appId="1828949344068618"
			    autoLoad={true}
			    fields="name,email,picture"
			    onClick={this.componentClicked}
			    callback={this.responseFacebook}
					/>


		)
	}
}
export default FaceBookLogin;
