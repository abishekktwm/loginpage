import React, { Component } from 'react';
import './App.css';
import Login from './components/loginComponent.js'
import UserInfo from './components/userInfo.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {};
	}


	render() {
		const displayUserInfo = this.props.reduxState.displayUserInfo;
		const response = this.props.reduxState.userInfo.userFacebookInfo;
		console.log(displayUserInfo)
		return(
			<div className="container-fluid">
      { displayUserInfo ? <UserInfo response={response}  /> : <Login  /> }
      </div>
		);
	}
}

function mapStateToProps(state) {
	return { reduxState: state.data};
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({


	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
