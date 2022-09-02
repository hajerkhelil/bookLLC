import {
	REGISTER,
	FAIL,
	LOGIN,
	LOGOUT,
	GET_CURRENT,
	CLEARERRORS,
	GET_USERS,
} from './../types/authtypes';

import axios from 'axios';

export const register = (newuser, Navigate) => async (dispatch) => {
	try {
		const res = await axios.post(
			'http://localhost:3000/api/authe/signup',
			newuser
		);
		dispatch({ type: REGISTER, payload: res.data });
		Navigate('/profile');
	} catch (error) {
		dispatch({ type: FAIL, payload: error.response.data });
	}
};

export const login = (user, Navigate) => async (dispatch) => {
	try {
		const res = await axios.post('http://localhost:3000/api/authe/logIn', user);
		dispatch({ type: LOGIN, payload: res.data });
		console.log(res.data);

		if (res.data.user.role === 'user') {
			return Navigate('/profile');
		}

		if (res.data.user.role === 'admin') {
			return Navigate('/AdminProfile');
		}
	} catch (error) {
		dispatch({ type: FAIL, payload: error.response.data });
	}
};

export const logout = () => {
	return { type: LOGOUT };
};

// profile
export const getcurrent = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	const config = {
		headers: {
			authorization: token,
		},
	};
	try {
		const res = await axios.get(
			'http://localhost:3000/api/authe/current',
			config
		);
		dispatch({ type: GET_CURRENT, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};

export const clearerrors = () => {
	return { type: CLEARERRORS };
};

// for the admin page
export const getusers = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	const config = {
		headers: {
			authorization: token,
		},
	};
	try {
		console.log('hi');
		const res = await axios.get(
			'http://localhost:3000/api/authe/allusers',
			config
		);
		dispatch({ type: GET_USERS, payload: res.data });
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

// user
export const edituser =
	(id, updatedname, updatedemail, updatedpassword, updatedbanned) =>
	async (dispatch) => {
		const config = {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		};
		try {
			console.log(updatedname);
			const res = await axios.put(
				`http://localhost:3000/api/authe/UpdateUser/${id}`,
				{
					name: updatedname,
					email: updatedemail,
					password: updatedpassword,
					banned: updatedbanned,
				},
				config
			);
			console.log(res.data);
			dispatch(getusers());
		} catch (error) {
			console.log(error);
		}
	};

//password
export const editpassword = (id, updatedpassword) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	console.log(config.headers.authorization);
	try {
		const res = await axios.put(
			`http://localhost:3000/api/authe/UpdatePassword/${config.headers.authorization}`, // token
			{
				password: updatedpassword,
			},
			config
		);
		console.log(res.data);
		dispatch(getusers());
	} catch (error) {
		console.log(error);
	}
};

// admin
export const banuser = (id, updatedbanned) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		console.log(id);
		const res = await axios.put(
			`http://localhost:3000/api/authe/BanUser/${id}`,
			{
				banned: updatedbanned,
			},
			config
		);
		console.log(res.data);
		dispatch(getusers());
	} catch (error) {
		console.log(error);
	}
};
