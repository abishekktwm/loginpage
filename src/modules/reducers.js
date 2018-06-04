import 'core-js/es6/array';

export const AUTHENTICATION_REQUESTED = 'AUTHENTICATION_REQUESTED'
export const AUTHENTICATION_DONE = 'AUTHENTICATION_DONE'

const initialState = {
	user: {}
};

//================  REDUCERS ====================
export default(state = initialState, action) => {
	switch(action.type) {
		case AUTHENTICATION_REQUESTED:
			return state
		case AUTHENTICATION_DONE:
				return state
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

//================  End of Action Creators ====================
