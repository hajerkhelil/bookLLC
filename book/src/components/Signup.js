import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { register } from '../redux/actions/authactions';

function Signup() {
	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const Navigate = useNavigate();
	const dispatch = useDispatch();
	const errors = useSelector((state) => state.authReducer.errors);

	return (
		<div>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>User Name</Form.Label>
					<Form.Control
						value={name}
						onChange={(e) => setname(e.target.value)}
						type='name'
						placeholder='User Name'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(e) => setemail(e.target.value)}
						value={email}
						type='email'
						placeholder='Enter email'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={(e) => setpassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Password'
					/>
				</Form.Group>

				<Button
					onClick={(e) => {
						e.preventDefault();
						dispatch(register({ name, email, password }, Navigate));
					}}
					variant='primary'
					type='submit'
				>
					Sign Up
				</Button>
			</Form>
		</div>
	);
}

export default Signup;
