import React from 'react'
import UserLogin from '../components/userLoginComponent.js'
import FaceBookLogin from '../components/facebookLoginComponent.js'
import GoogleLoginComp from '../components/googleLoginComponent.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


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


			<div className="container-fluid">
		    <div className="row">
		      <div className="col-sm-3"></div>
		      <div className="col-sm-4" style={{ marginTop: 10, fontWeight: 'bold'}}>The Login Page</div>
		    </div>
		    <div className="row">
		      <div className="col-sm-2"></div>
		      <div className="col-sm-8">
		        <hr style={{borderBottomColor: 'black', borderBottomWidth: 1, size: '100%'}} className="col-lg-12" />
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-sm-3"></div>
		      <div className="col-sm-4">
		        <div className="container">
		          <div className="row">
		            <div className="col-sm-6">
		              <h2>Log In</h2>
		              <p>Dont have an account?<a href="login#signup">Create one »</a></p>
		            </div>
		          </div>



		          {/* Social Buttons */}
		          <div className="row">
		            <div className="col-sm-6">
		              <div className="SButtons">
		                <div className="SButtonContainer">

											<FaceBookLogin />


											<GoogleLoginComp />


		                </div>
		                <div className="LineOr">OR</div>
		              </div>
		            </div>
		          </div>
		          {/* Social Buttons End */}





		          {/* Email Login  */}
<UserLogin />
		          {/* Email Button End */}






		        </div>
		      </div>
		      <div className="col-sm-4"></div>
		    </div>
		    <div className="row">
		      <div className="col-sm-2"></div>
					<div className="col-sm-8">
		        <hr style={{borderBottomColor: 'black', borderBottomWidth: 1, size: '100%'}} className="col-lg-12" />
		      </div>
		    </div>
		  </div>





		)
	}
}


function mapStateToProps(state) {
	return { reduxState: state.data };
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({

	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
