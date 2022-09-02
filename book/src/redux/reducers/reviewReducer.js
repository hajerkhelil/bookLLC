import { ADD_REVIEW, GET_REVIEWS } from '../types/reviewtypes';

const initialState = {
	reviews: [],
	review: {},
};

const bookReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_REVIEWS:
			return { ...state, reviews: payload.reviews };

		case ADD_REVIEW:
			return { ...state, review: payload.reviews };

		default:
			return state;
	}
};

export default bookReducer;
