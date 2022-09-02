import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authactions';

function Login() {
	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');

	const dispatch = useDispatch();
	const Navigate = useNavigate();

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
						value={email}
						onChange={(e) => setemail(e.target.value)}
						type='email'
						placeholder='Enter email'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						value={password}
						onChange={(e) => setpassword(e.target.value)}
						type='password'
						placeholder='Password'
					/>
				</Form.Group>

				<Button
					onClick={(e) => {
						e.preventDefault();
						dispatch(login({ name, email, password }, Navigate));
					}}
					variant='primary'
					type='submit'
				>
					Log In
				</Button>
			</Form>
		</div>
	);
}

export default Login;
