import React from 'react';

function Search({ setSearch }) {
	return (
		<div>
			<form>
				<label>
					search:
					<input
						type='text'
						name='search'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</label>
				{/* <input type='submit' value='search' /> */}
			</form>
		</div>
	);
}

export default Search;
