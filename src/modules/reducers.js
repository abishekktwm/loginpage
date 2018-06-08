import 'core-js/es6/array';

export const AUTHENTICATION_REQUESTED = 'AUTHENTICATION_REQUESTED'
export const AUTHENTICATION_DONE = 'AUTHENTICATION_DONE'
export const FACEBOOK_AUTHENTICATED = 'FACEBOOK_AUTHENTICATED'
export const GOOGLE_AUTHENTICATED = 'FACEBOOK_AUTHENTICATED'
export const EMAIL_AUTHENTICATED = 'EMAIL_AUTHENTICATED'
export const FACEBOOK_BUTTON_CLICKED = 'FACEBOOK_BUTTON_CLICKED'
export const BACK_BUTTON_CLICKED = 'BACK_BUTTON_CLICKED'



const initialState = {
	userInfo: {userFacebookInfo: {},
						 userGoogleInfo:  {},
						 userEmailInfo: {},
						 isLoggedIn: false,
						 source: null
					 },
	displayUserInfo: false


};

//================  REDUCERS ====================
export default(state = initialState, action) => {
	let newUserInfo = {}
	switch(action.type) {
		case AUTHENTICATION_REQUESTED:
			return state
		case AUTHENTICATION_DONE:
				return state
		case FACEBOOK_BUTTON_CLICKED:
					state.displayUserInfo = true;
					newUserInfo = Object.assign({}, state.userInfo, {userFacebookInfo: action.data});
					return Object.assign({}, state, { userInfo: newUserInfo });
		case FACEBOOK_AUTHENTICATED:
					state.userInfo.isLoggedIn = true;
					newUserInfo = Object.assign({}, state.userInfo, {userFacebookInfo: action.data});
					return Object.assign({}, state, { userInfo: newUserInfo });
		case GOOGLE_AUTHENTICATED:
					state.userInfo.isLoggedIn = true;
					state.displayUserInfo = true;
					newUserInfo = Object.assign({}, state.userInfo, {userGoogleInfo: action.data});
					return Object.assign({}, state, { userInfo: newUserInfo });
		case EMAIL_AUTHENTICATED:
					state.userInfo.isLoggedIn = true;
					newUserInfo = Object.assign({}, state.userInfo, {userEmailInfo: action.data});
					state.displayUserInfo = true;
					return Object.assign({}, state, { userInfo: newUserInfo });
		case BACK_BUTTON_CLICKED:
				return Object.assign({}, state, { displayUserInfo: false });
		default:
			//console.log(state)
			return state
	}
}
//================  END OF REDUCERS ====================

//================  Action Creators ====================
export const autheticateUser = (data) => {
	return {
		type: AUTHENTICATION_REQUESTED,
		data
	};
}
export const authenticationFinished = (data) => {
	return {
		type: AUTHENTICATION_DONE,
		data
	};
}
export const facebookAuthenticated = (data) => {
	return {
		type: FACEBOOK_AUTHENTICATED,
		data
	};
}
export const facebookButtonClicked = (data) => {
	return {
		type: FACEBOOK_BUTTON_CLICKED,
		data
	};
}
export const googleAuthenticated = (data) => {
	return {
		type: GOOGLE_AUTHENTICATED,
		data
	};
}
export const 	emailAuthenticated = (data) => {
	return {
		type: EMAIL_AUTHENTICATED,
		data
	};
}
export const 	backButtonClicked = (data) => {
	return {
		type: BACK_BUTTON_CLICKED,
		data
	};
}
//================  End of Action Creators ====================
