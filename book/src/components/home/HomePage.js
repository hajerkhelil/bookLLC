import React, { useState } from 'react';
import BookList from './BookList';
import Search from './Search';

// list of books that will be shown on the main page
function HomePage() {
	const [search, setSearch] = useState('');

	console.log('set', setSearch);
	return (
		<div>
			<Search setSearch={setSearch} />
			<BookList search={search} />
		</div>
	);
}

export default HomePage;
