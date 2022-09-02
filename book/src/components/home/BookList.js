import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function BookList({ search }) {
	const books = useSelector((state) => state.bookReducer.books);

	console.log("books", books);

	return (
		<div>
			{books
				.filter((book) =>
					book.name.toUpperCase().includes(search.toUpperCase())
				)
				.map((book) => (
					<BookCard book={book} key={book._id}></BookCard>
				))}
		</div>
	);
}

export default BookList;
