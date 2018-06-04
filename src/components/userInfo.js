import React from 'react'



class UserInfo extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.goBack = this.goBack.bind(this)
		this.state = {
			response: null,
			handler: props.handler
		}
	}

	goBack() {
		if(this.state.handler) {
			this.state.handler({}, "userInfo", false);
		}
	}

	render() {

		let obj = this.props.response
		let arrInfo = Object.entries(obj).filter(item => typeof item[1] !== "object")
		return(


			<div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                 <div className="account-wall">


{  arrInfo.map((val, i) => {
  				return(	<p key={i}>{val[0]} : {val[1]}</p>)
  				})}

                 </div>
                  <div><button onClick={this.goBack} >Back</button></div>
                 </div>
                 </div>
                 </div>


		)
	}
}
export default UserInfo;
