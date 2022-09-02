import {
	REGISTER,
	FAIL,
	LOGIN,
	LOGOUT,
	GET_CURRENT,
	CLEARERRORS,
	GET_USERS,
	EDIT_USER,
	BAN_USER,
	EDIT_PASSWORD,
	GET_USER,
} from './../types/authtypes';

const initialState = {
	users: [],
	user: null,
	errors: null,
	auth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER:
		case LOGIN:
			localStorage.setItem('token', payload.token);
			return { ...state, user: payload.user, auth: true, errors: null };

		case FAIL:
			return { ...state, errors: payload.errors, auth: false };

		case LOGOUT:
			localStorage.removeItem('token');
			return { ...state, user: null, auth: false };

		case GET_CURRENT:
			return { ...state, user: payload, auth: true };

		case CLEARERRORS:
			return { ...state, errors: null };

		case GET_USERS:
			return { ...state, users: payload.users };

		case EDIT_USER:
		case EDIT_PASSWORD:
			return {
				...state,
				users: state.users.map((el) =>
					el._id !== payload._id ? el : { ...el, user: payload.newuser }
				),
			};

		case BAN_USER:
			return {
				...state,
				users: state.users.map((el) =>
					el._id !== payload._id ? el : { ...el, user: payload.newuser }
				),
			};

		case GET_USER:
			return { ...state, user: payload.founduser };

		default:
			return state;
	}
};

export default authReducer;
