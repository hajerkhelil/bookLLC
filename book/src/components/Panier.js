import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/actions/panieractions';
import { Navigate, useNavigate } from 'react-router-dom';
import del from './Icons/deletered.png';
import { deletebook } from '../redux/actions/bookactions';

function Panier() {
	const cart = JSON.parse(localStorage['cart']);
	//  const count = JSON.parse(localStorage['count']);
	// console.log(cart)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const auth = useSelector((state) => state.authReducer.auth);
	const user = useSelector((state) => state.authReducer.user);

	return (
		<div>
			{localStorage.getItem('token') && auth ? (
				<div>
					{cart.map((el) => (
						<div>
							<h1> {el.name} </h1>
							<h2> {el.price} </h2>
							<button
								onClick={() => {
									dispatch(increment(el));
									window.location.reload();
								}}
							>
								+
							</button>
							<span> {el && el.qty} </span>
							<button
								onClick={() => {
									dispatch(decrement(el));
									window.location.reload();
								}}
							>
								-
							</button>
							<h3> total price of the books : {el.qty * el.price}</h3>
						</div>
					))}
				</div>
			) : (
				<div>
					<h1>hello {user && user.email}</h1>
				</div>
			)}
		</div>
	);
}

export default Panier;
