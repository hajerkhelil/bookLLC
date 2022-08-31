// for testing
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editbook } from '../../redux/actions/bookactions';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

// edite the book you choose
function Edit() {
	const { id } = useParams();

	const books = useSelector((state) => state.bookReducer.books);
	const book = books.find((p) => p._id === id);

	const dispatch = useDispatch();

	console.log('book', book);
	console.log('book', book.name);
	console.log('id', id);

	const [editedname, setEditedname] = useState(book.name);
	const [editedimages, setEditedimages] = useState(book.images);
	const [editedauthor, setEditedauthor] = useState(book.author);
	const [editeddescription, setEditeddescription] = useState(book.description);
	const [editedGenre, setEditedGenre] = useState(book.Genre);
	const [editedprice, setEditedprice] = useState(book.price);


	const handleClick = () => {
		dispatch(editbook(id, editedname,editedimages,editedauthor,editeddescription,editedGenre,editedprice));
	};

	return (
		<>
			<Form.Group className='mb-3'>
				<Form.Label>name</Form.Label>
				<Form.Control
					placeholder='enter your book name'
					onChange={(e) => setEditedname(e.target.value)}
					value={editedname}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>author</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedimages(e.target.value)}
					value={editedimages}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>author</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedauthor(e.target.value)}
					value={editedauthor}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>author</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditeddescription(e.target.value)}
					value={editeddescription}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>author</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedGenre(e.target.value)}
					value={editedGenre}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>author</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedprice(e.target.value)}
					value={editedprice}
				/>
			</Form.Group>

			<Button variant='info' onClick={handleClick}>
				edit changes
			</Button> 
		</>
	);
}

export default Edit;
