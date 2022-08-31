
import { GET_BOOK, GET_BOOKS } from '../types/booktypes';

const initialState = {
	books: [],
	book: {},
	count: 1,
};

const bookReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_BOOKS:
			return { ...state, books: payload.books };

		case GET_BOOK:
			return { ...state, book: payload.foundbook };

		
		default:
			return state;
	}
};

export default bookReducer;
