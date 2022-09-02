import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addToCART } from './../../redux/actions/panieractions';

export default function BookDetails() {
	const dispatch = useDispatch();
	const book = useSelector((state) => state.bookReducer.book);

	const cart = useSelector((state) => state.bookReducer.cart);
	const find = cart && cart.find((el) => el._id === book._id);
	return (
		<div>
			<img src={book.images} />
			<h1>{book.name}</h1>
			<h1>{book.author}</h1>
			<h1>{book.description}</h1>
			<h1>{book.Genre}</h1>
			<h1>{book.price}</h1>

			<Button
				onClick={() => {
					find ? alert('book exist') : dispatch(addToCART(book));
				}}
			>
				add to basket
			</Button>
		</div>
	);
}
