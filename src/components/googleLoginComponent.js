import React from 'react'
import { GoogleLogin } from 'react-google-login';


class GoogleLoginComp extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.responseGoogle = this.responseGoogle.bind(this)
		this.failedGoogle = this.failedGoogle.bind(this)
		this.state = {
			response: null,
			handler: props.handler
		}
	}

	responseGoogle(response) {
		if(response.accessToken && !this.state.response) {
			this.setState({
				response: response
			}, () => {
				if(this.state.response.profileObj) {
					this.state.handler(this.state.response.profileObj, "google", true)
				}
			})
		}
	}

	failedGoogle(response) {
		console.log(response)
	}

	render() {
		return(
			<div>
                  <GoogleLogin
                      clientId="169418312728-a2hflbdreim0chmn4aadsjcstn5ps6sf.apps.googleusercontent.com"
                      buttonText="Sign in with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.failedGoogle}
                  />
      </div>

		)
	}
}
export default GoogleLoginComp;
