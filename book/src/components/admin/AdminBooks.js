import React from 'react';
import { Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletebook } from '../../redux/actions/bookactions';
import del from '../Icons/deletered.png';

function AdminBooks({ book }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' />
				<Card.Body>
					<Card.Title>{book && book.name}</Card.Title>
					<img
						class='delete'
						src={del}
						alt='delete'
						height='20'
						onClick={() => dispatch(deletebook(book._id))}
					/>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AdminBooks;
