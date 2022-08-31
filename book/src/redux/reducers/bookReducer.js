import {
	ADD_BOOK,
	DELETE_BOOK,
	EDIT_BOOK,
	GET_BOOK,
	GET_BOOKS,
} from '../types/booktypes';

const initialState = {
	books: [],
	book: {},
};

const bookReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_BOOKS:
			return { ...state, books: payload.books };

		case GET_BOOK:
			return { ...state, book: payload.foundbook };

		case ADD_BOOK:
			return { ...state, book: payload.books };

		case EDIT_BOOK:
			return {
				...state,
				tasks: state.books.map((el) =>
					el._id !== payload._id ? el : { ...el, book: payload.newbook }
				),
			};

		case DELETE_BOOK:
			return {
				...state,
				books: state.books.filter((el) => el._id !== payload),
			};

		default:
			return state;
	}
};

export default bookReducer;
