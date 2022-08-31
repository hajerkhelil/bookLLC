import axios from 'axios';

import { GET_BOOK, GET_BOOKS } from '../types/booktypes';

export const getbooks = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:3000/api/book/AllBooks');
		dispatch({ type: GET_BOOKS, payload: res.data });
		// console.log(res.data)
	} catch (error) {
		console.log(error);
	}
};

// books that the user wants to sell
export const getbooksbyuser = () => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.get('http://localhost:3000/api/book/BooksbyUser',config);
		dispatch({ type: GET_BOOKS, payload: res.data });
		console.log('getbooksbyuser', res.data);
	} catch (error) {
		console.log(error);
	}
};

export const addbook = (newbook) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.post(
			'http://localhost:3000/api/book/AddBook',
			newbook,
			config
		);
		dispatch(getbooks());
	} catch (error) {
		console.log(error);
	}
};

export const getbook = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3000/api/book/OneBook/${id}`);
		dispatch({ type: GET_BOOK, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};

export const deletebook = (id) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.get(
			`http://localhost:3000/api/book/DeleteBook/${id}`
		);
		dispatch(getbooks());
	} catch (error) {
		console.log(error);
	}
};

export const editbook = (id) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.put(
			`http://localhost:3000/api/book/UpdateBook/${id}`
		);
		dispatch(getbooks());
	} catch (error) {
		console.log(error);
	}
};
