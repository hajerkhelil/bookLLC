import React from 'react';
import { useSelector } from 'react-redux';
import AdminBooks from './AdminBooks';

function BookList() {
	const books = useSelector((state) => state.bookReducer.books);
    console.log("books", books);
    
	return (
		<div>
			{books && books.map((book) => <AdminBooks book={book}></AdminBooks>)}
		</div>
	);
}

export default BookList;
