import React, { Component } from 'react';
import './App.css';
import Login from './components/loginComponent.js'
import UserInfo from './components/userInfo.js'


class App extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isLoggedIn: false,
			response: {}
		};
		this.handler = this.handler.bind(this)
	}

	handler(response, source, home) {
		if(home === false) {
			window.location.reload()
		}

		response.source = source;
		this.setState({
			isLoggedIn: home === false ? home : true,
			response: response
		})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		const response = this.state.response;
		return(
			<div className="App">
      { isLoggedIn ? <UserInfo response={response} handler={this.handler} /> : <Login handler={this.handler} /> }
      </div>
		);
	}
}

export default App;
