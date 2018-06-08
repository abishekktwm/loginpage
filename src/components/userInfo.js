import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	backButtonClicked
} from '../modules/reducers'

class UserInfo extends React.Component {
		constructor(props, context) {
			super(props, context)
			this.goBack = this.goBack.bind(this)
			this.state = {}
		}

		goBack() {
			this.props.backButtonClicked(this.props.reduxState)
		}


		render() {
  			let obj = this.props.reduxState.userInfo
				let fEntries = Object.entries(obj.userFacebookInfo)
				let gEntries = Object.entries(obj.userGoogleInfo)
				let eEntries = Object.entries(obj.userEmailInfo)

				return (
						<div className="jumbotron text-left">

						<div>
						<span><label>Facebook Info:</label>
						{	fEntries.filter(t => t !== null).map((t,i) => (<div key={i} >{t[0] + ': ' + t[1]}</div>)) }</span>
						<span><label>Google Info:</label>
						{	gEntries.filter(t => t !== null).map((t,i)=> (<div key={i}>{t[0] + ': ' + t[1]}</div>)) }</span>
						<div></div>
						<span><label>Email Info:</label>
						{	eEntries.filter(t => t !== null).map((t,i) => (<div key={i}>{t[0] + ': ' + t[1]}</div>)) }</span>
				    </div>

			<div><button onClick={this.goBack} >Back</button></div>
      </div>
		)
	}
}

function mapStateToProps(state) {
	return { reduxState: state.data };
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		backButtonClicked
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInfo)
