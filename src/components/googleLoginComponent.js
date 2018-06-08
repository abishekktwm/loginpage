import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	googleAuthenticated
} from '../modules/reducers'
import $ from "jquery"

class GoogleLoginComp extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.responseGoogle = this.responseGoogle.bind(this)
		this.failedGoogle = this.failedGoogle.bind(this)
		this.state = {}
	}

	responseGoogle(response) {
		if(response.accessToken && !this.state.response) {

			response.isLoggedIn = true;
			response.source = "google";
			this.props.googleAuthenticated(response)
		}
	}

	componentDidMount() {
		var el = $('.google');
		el.removeClass('google');
		el.addClass('fa fa-google');
		//el.append('<i class="fa fa-facebook pr-1"></i>')
	}

	failedGoogle(response) {
		//console.log(response)
	}

	render() {
		return(
			<div>

                  <GoogleLogin
                      clientId="688765204781-kdfmjn8465mhf8m003j3t8p9n3fiifs2.apps.googleusercontent.com"
                      buttonText="Sign in with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.failedGoogle}
											className='google'
                  />
      </div>

		)
	}
}

function mapStateToProps(state) {
	return { reduxState: state.data};
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		googleAuthenticated
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GoogleLoginComp)
