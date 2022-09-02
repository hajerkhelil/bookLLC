import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import edit from './Icons/editorang.png';
import Profiles from './Profiles';
import { getuser, getusers } from '../redux/actions/authactions';
import { getbooks, getbooksbyuser } from '../redux/actions/bookactions';
import ReactStars from 'react-rating-stars-component';

function OtherProfile({ user }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log(user._id);

	const [rate, setRate] = useState(0);

	const rating = (e) => {
		setRate(e.target.value);
	};
	
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' />
				<Card.Body>
					<Card.Title> {user && user.email} </Card.Title>
					{/* <Profiles user={user} /> */}
					<img
						class='edit'
						src={edit}
						alt='edit'
						height='20'
						onClick={() => {
							dispatch(getuser(user._id));
							navigate('/profiles');
						}}
					/>
					{/* <ReactStars
						count={5}
						onChange={rating}
						size={24}
						activeColor='#ffd700'
					/> */}

					<input
						type='text'
						onChange={(e) => setRate(e.target.value)}
						value={rate}
					/>
				</Card.Body>
			</Card>
		</div>
	);
}

export default OtherProfile;
