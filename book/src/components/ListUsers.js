import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OtherProfile from './OtherProfile';

function UserList() {
	
	const users = useSelector((state) => state.authReducer.users);
	console.log('ListUsers', users);

	return (
		<div>
			{users &&
				users.map((user) => (
					<OtherProfile user={user} key={user._id}></OtherProfile>
				))}
		</div>
	);
}

export default UserList;
