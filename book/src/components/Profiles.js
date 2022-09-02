import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Editprofile from './Editprofile';
import { getbooksbyuser } from '../redux/actions/bookactions';
import { addreview } from '../redux/actions/reviewactions';
import { Form, Button } from 'react-bootstrap';

function Profiles() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.authReducer.user);
	console.log('user profile', user);

	const [review, setreview] = useState('');

	console.log('userid', user._id);

	return (
		<div>
			<h1> hello {user && user.email}</h1>

			<form>
				<label>
					review user profile:
					<input
						type='text'
						name='name'
						onChange={(e) => setreview(e.target.value)}
						value={review}
					/>
				</label>
			</form>
			<Button
				variant='info'
				onClick={(e) => {
					e.preventDefault();
					dispatch(
						addreview({
							rating: review,
							rateduser:user._id,
						})
					);
				}}
			>
				review user
			</Button>
		</div>
	);
}

export default Profiles;
