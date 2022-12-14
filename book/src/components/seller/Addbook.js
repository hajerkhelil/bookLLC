import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addbook } from '../../redux/actions/bookactions';

const Addbook = () => {
	const [bookname, setbookname] = useState('');
	const [authorname, setauthorname] = useState('');
	const [description, setdescription] = useState('');
	const [genre, setgenre] = useState('');
	const [price, setprice] = useState('');
	const [image, setimage] = useState('');

	const dispatch = useDispatch();

	return (
		<div>
			<>
				<Form.Group className='mb-3'>
					<Form.Label>Image</Form.Label>
					<Form.Control
						placeholder='enter your book poster'
						onChange={(e) => setimage(e.target.value)}
						value={image}
					/>

					<Form.Label>book name </Form.Label>
					<Form.Control
						placeholder='enter your book name '
						onChange={(e) => setbookname(e.target.value)}
						value={bookname}
					/>

					<Form.Label>author name </Form.Label>
					<Form.Control
						placeholder='enter your author name'
						onChange={(e) => setauthorname(e.target.value)}
						value={authorname}
					/>

					<Form.Label>description </Form.Label>
					<Form.Control
						placeholder='enter your description'
						onChange={(e) => setdescription(e.target.value)}
						value={description}
					/>

					<Form.Label>Genre</Form.Label>
					<Form.Control
						placeholder='enter your Genre'
						onChange={(e) => setgenre(e.target.value)}
						value={genre}
					/>

					<Form.Label>price</Form.Label>
					<Form.Control
						placeholder='enter your price'
						onChange={(e) => setprice(e.target.value)}
						value={price}
					/>
				</Form.Group>

				<Button
					variant='info'
					onClick={(e) => {
						e.preventDefault();
						dispatch(
							addbook({
								images: image,
								Genre: genre,
								price,
								description,
								author: authorname,
								name: bookname,
								qty: 0,
							})
						);
					}}
				>
					save changes
				</Button>
			</>
		</div>
	);
};

export default Addbook;
