import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { editpassword, edituser, getcurrent } from '../redux/actions/authactions';

function Editprofile({user}) {
	// const { id } = useParams();

	// const users = useSelector((state) => state.authReducer.users);
	//  const user = users.find((p) => p._id === id);

	// const user = useSelector((state) => state.bookReducer.user);
	// console.log(user);

	// useEffect(() => {
	// 	dispatch(getcurrent());
	// }, []);

	const dispatch = useDispatch();

	const [editedname, setEditedname] = useState(user.name);
	const [editedemail, setEditedemail] = useState(user.email);
	const [editedpassword, setEditedpassword] = useState(user.password);

	const handleClick = () => {
		console.log(user._id);
		dispatch(edituser(user._id,editedname,editedemail));
	};

	
	const handleClickpassword = () => {
		dispatch(editpassword(editedpassword));
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
				<Form.Label>email</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedemail(e.target.value)}
					value={editedemail}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>password</Form.Label>
				<Form.Control
					placeholder='enter your book author'
					onChange={(e) => setEditedpassword(e.target.value)}
					value={editedpassword}
				/>
			</Form.Group>

			<Button variant='info' onClick={handleClick}>
				edit changes
			</Button>

			<Button variant='info' onClick={handleClickpassword}>
				edit password
			</Button>
			
		</>
	);
}

export default Editprofile;
