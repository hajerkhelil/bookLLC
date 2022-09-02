import React from 'react';
import ListUsers from './ListUsers';
import { useSelector } from 'react-redux';

function SeeUsers() {
	const users = useSelector((state) => state.authReducer.users);
	console.log('see', users);
    
	return (
		<div>
			<ListUsers />
		</div>
	);
}

export default SeeUsers;
