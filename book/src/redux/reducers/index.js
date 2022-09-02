import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
	authReducer,
	bookReducer,
	reviewReducer,
});

export default rootReducer;
