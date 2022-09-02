import axios from 'axios';
import { GET_REVIEWS } from '../types/reviewtypes';

export const getreviews = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:3000/api/review/AllReviews');
		dispatch({ type: GET_REVIEWS, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};


export const addreview = (id, newreview) => async (dispatch) => {
	const config = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		const res = await axios.post(
			`http://localhost:3000/api/review/AddReview/${id}`,
			newreview,
			config
		);
		dispatch(getreviews());
	} catch (error) {
		console.log(error);
	}
};
