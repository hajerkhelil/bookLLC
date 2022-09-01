import { ADDTOCART, DECREMENT, INCREMENT } from '../types/paniertypes.js';

export const addToCART = (item) => {
	return {
		type: ADDTOCART,
		payload: item,
	};
};

export const increment = (item) => {
	return {
		type: INCREMENT,
		payload: item,
	};
};

export const decrement = (item) => {
	return {
		type: DECREMENT,
		payload: item,
	};
};