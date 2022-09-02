import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Editprofile from './Editprofile';
import { getbooksbyuser } from '../redux/actions/bookactions';

function Profiles() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.authReducer.user);
	console.log('user profile', user);


	return (
		<div>
			<h1> {user && user.email}</h1>

		</div>
	);
}

export default Profiles;
