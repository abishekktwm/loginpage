import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	facebookAuthenticated,
	facebookButtonClicked
} from '../modules/reducers'
import $ from "jquery"

class FaceBookLogin extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.responseFacebook = this.responseFacebook.bind(this);
		this.componentClicked = this.componentClicked.bind(this);
		this.state = {}


	}
	shouldComponentUpdate() {
		return true;
	}

	responseFacebook(response) {
		if(response.accessToken && !this.state.response) {
			response.source = "facebook";
			this.props.facebookAuthenticated(response)

		}
	}
	componentDidMount() {
		var el = $('.kep-login-facebook');
		el.removeClass('kep-login-facebook metro');
		el.addClass('fa fa-facebook');
		//el.append('<i class="fa fa-facebook pr-1"></i>')
	}


	componentClicked(e) {
		this.props.facebookButtonClicked(this.props.reduxState.userInfo.userFacebookInfo)
	}

	render() {

		return(

			<div>

					<FacebookLogin
							appId="1828949344068618"
							className='kep-login-facebook metro'
							autoLoad={true}
							fields="name,email,picture"
							onClick={this.componentClicked}
							callback={this.responseFacebook}
							/>
			</div>







		)
	}
}


function mapStateToProps(state) {
	return { reduxState: state.data };
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		facebookAuthenticated,
		facebookButtonClicked
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FaceBookLogin)
