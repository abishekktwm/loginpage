import React from 'react'
import UserLogin from '../components/userLoginComponent.js'
import FaceBookLogin from '../components/facebookLoginComponent.js'
import GoogleLoginComp from '../components/googleLoginComponent.js'



class Login extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	shouldComponentUpdate() {
		return true;
	}

	render() {

		return(
			<div className="container">
				<div className="row">
						<div className="col-sm-6 col-md-4 col-md-offset-4">
								 <div className="account-wall">
            				<UserLogin  handler= {this.props.handler }/>
												<div className="row">
            							<FaceBookLogin handler= {this.props.handler } />
												</div>
												<div className="row">.....</div>
												<div className="row">
            							<GoogleLoginComp handler= {this.props.handler }/>
												</div>
								</div>
						</div>
				</div>
      </div>
		)
	}
}
export default Login;
