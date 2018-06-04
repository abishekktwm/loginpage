import React from 'react'

class UserLogin extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.componentClicked = this.componentClicked.bind(this);
		this.state = {
			response: null,
			handler: props.handler
		}
	}

	componentClicked(e) {
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		if(!this.state.response) {
			this.setState({
				response: { name: 'not specified', email: email, password: password }
			}, () => {
				if(this.state.response) {
					this.state.handler(this.state.response, "userLogin", true)
				}
			})
		}
	}


	render() {

		return(
			<div>
                      <h1 className="text-center login-title">Sign in</h1>
                      <form className="form-signin" id="form" onSubmit={this.componentClicked}>
                      <input  type="email" className="form-control" placeholder="Email" id="email" required autoFocus />
                      <input type="password" className="form-control" placeholder="Password" id="password" required />
                      <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                      <a href="/" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                      <a href="/" className="text-center new-account">Create an account </a>
                      </form>
              </div>
		)
	}
}
export default UserLogin;
