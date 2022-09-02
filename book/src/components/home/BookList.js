import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function BookList() {
	const books = useSelector((state) => state.bookReducer.books);
	// console.log('books', books);
	const [search, setSearch] = useState('');

	const searchbook = books.filter((book) => {
		return book.name.toLowerCase().includes(search.input);
	});
	console.log('search', searchbook);

	return (
		<div>
			{searchbook.map((book) => (
				<BookCard book={book} key={book._id}></BookCard>
			))}

			{books.map((book) => (
				<BookCard book={book} key={book._id}></BookCard>
			))}
		</div>
	);
}

export default BookList;
