import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminRoute({ children }) {
	const token = localStorage.getItem('token');
	const user = useSelector((state) => state.authReducer.user);

	return token || (user && user.role === 'admin') ? (
		children
	) : (
		<Navigate to='/signup'></Navigate>
	);
}
export default AdminRoute;
