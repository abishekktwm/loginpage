import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	emailAuthenticated
} from '../modules/reducers'

class UserLogin extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.buttonSignInClicked = this.buttonSignInClicked.bind(this);
		this.state = {}
	}

	buttonSignInClicked(e) {
		e.preventDefault()
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		let response= { name: 'not specified', email: email, password: password , source: "email"}
		this.props.emailAuthenticated(response)

	}


	render() {

		return(
												<div className="row">
												<div className="col-sm-6">
													<form method="POST" id="form" onSubmit={this.buttonSignInClicked} >
														<div className="form-group">
															<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Username or Email Address"  required autoFocus/>
														</div>
														<div className="form-group">
															<input type="password" className="form-control" id="password" placeholder="Password" required />
														</div>
														<div className="form-group">
															<div className="container">
																<div className="row">
																	<div className="col-sm-4">
																		<input type="checkbox" className="form-check-input" id="exampleCheck1" />
																		<label className="text-sm-left small" >Remember me</label>
																	</div>
																	<div className="col-sm-6">
																		<a href="somePlace" className="right">
																			<label className="text-sm-right small">Forgot your password?</label>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<button id="submitButton" type="submit" className="btn btn-primary btn-block">Log In</button>
													</form>
												</div>
											</div>

		)
	}
}
function mapStateToProps(state) {
	return { reduxState: state.data};
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		emailAuthenticated
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserLogin)
