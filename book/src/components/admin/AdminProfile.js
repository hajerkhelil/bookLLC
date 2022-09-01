
import React from 'react';
import { Card } from 'react-bootstrap';

function AdminProfile({ user }) {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' />
				<Card.Body>
					<Card.Title>{user && user.email}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AdminProfile;
