
import React from 'react';
import { useSelector } from 'react-redux';
import AdminProfile from './AdminProfile';

function UserList() {
	const users = useSelector((state) => state.authReducer.users);

	return (
		<div>
			{users && users.map((user) => <AdminProfile user={user}></AdminProfile>)}
		</div>
	);
}

export default UserList;
