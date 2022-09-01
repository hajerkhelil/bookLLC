import {
	ADD_BOOK,
	DELETE_BOOK,
	EDIT_BOOK,
	GET_BOOK,
	GET_BOOKS,
} from '../types/booktypes';
import { ADDTOCART, DECREMENT, INCREMENT } from '../types/paniertypes';

const initialState = {
	books: [],
	book: {},
	cart: [],
	count: 1,
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

		case ADDTOCART:
			console.log(payload);
			localStorage.setItem(
				'cart',
				JSON.stringify([...state.cart, { ...payload, qty: payload.qty + 1 }])
			);
			const t = state.cart.find((p) => p._id == payload._id);

			if (t) {
				return {
					...state,
					cart: [...state.cart, { ...payload, qty: payload.qty + 1 }],
				};
			} else {
				return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
			}

			
		case INCREMENT:
			const cart = JSON.parse(localStorage['cart']);
			const newcart = cart.map((el) =>
				el._id === payload._id ? { ...el, qty: el.qty + 1 } : el
			);
			localStorage.setItem('cart', JSON.stringify(newcart));
			return { ...state, cart: newcart };


		case DECREMENT:
			const cartt = JSON.parse(localStorage['cart']);
			const newcartt = cartt.map((el) =>
				el._id === payload._id ? { ...el, qty: el.qty - 1 } : el
			);
			localStorage.setItem('cart', JSON.stringify(newcartt));
			return { ...state, cartt: newcartt };

		default:
			return state;
	}
};

export default bookReducer;
