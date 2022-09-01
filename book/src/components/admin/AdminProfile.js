import React from 'react';
import { Card } from 'react-bootstrap';
import edit from '../Icons/editorang.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { banuser } from '../../redux/actions/authactions';
import { useDispatch, useSelector } from 'react-redux';
import del from '../Icons/deletered.png';

function AdminProfile({ user }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log(user._id);

	const [editedbanned, setEditedbanned] = useState(user.banned);

	console.log(editedbanned);

	const handleClick = () => {
		dispatch(banuser(user._id, editedbanned));
	};

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' />
				<Card.Body>
					<Card.Title>{user && user.email}</Card.Title>

					<form>
						<label>
							banned :
							<input
								type='text'
								onChange={(e) => setEditedbanned(e.target.value)}
								value={editedbanned}
							/>
						</label>
						<img
							class='delete'
							src={del}
							alt='delete'
							height='20'
							onClick={handleClick}
						/>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AdminProfile;
