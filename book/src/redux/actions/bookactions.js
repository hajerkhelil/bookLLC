import axios from 'axios';
import { GET_BOOK, GET_BOOKS } from '../types/booktypes';

export const getbooks = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:3000/api/book/AllBooks');
		dispatch({ type: GET_BOOKS, payload: res.data });
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
		const res = await axios.get(
			'http://localhost:3000/api/book/BooksbyUser',
			config
		);
		dispatch({ type: GET_BOOKS, payload: res.data });
		// console.log('getbooksbyuser', res.data);
	} catch (error) {
		console.log(error);
	}
};

// seller add book
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

// seller and admin delete books
export const deletebook = (id) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.get(
			`http://localhost:3000/api/book/DeleteBook/${id}`,
			config
		);
		dispatch(getbooks());
	} catch (error) {
		console.log(error);
	}
};

// seller edit a book
export const editbook =
	(
		id,
		updatedname,
		updatedimages,
		updatedauthor,
		updateddescription,
		updatedGenre,
		updatedprice
	) =>
	async (dispatch) => {
		const config = {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		};
		try {
			const res = await axios.put(
				`http://localhost:3000/api/book/UpdateBook/${id}`,
				{
					name: updatedname,
					images: updatedimages,
					author: updatedauthor,
					description: updateddescription,
					Genre: updatedGenre,
					price: updatedprice,
				},
				config
			);
			dispatch(getbooks());
		} catch (error) {
			console.log(error);
		}
	};
