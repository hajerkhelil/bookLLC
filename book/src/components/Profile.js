import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../redux/actions/authactions';
import { deletebook, getbooksbyuser } from '../redux/actions/bookactions';
import edit from './Icons/editorang.png';
import add from './Icons/addicon.png';
import del from './Icons/deletered.png';
import style from './Profile.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Editt from './seller/Editt';

function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.authReducer.user);

	 useEffect(() => {
	 	dispatch(getcurrent());
	 }, []);

	useEffect(() => {
		dispatch(getbooksbyuser());
	}, []);

	const books = useSelector((state) => state.bookReducer.books);
	const book = useSelector((state) => state.bookReducer.book);


	const handleClickadd = () => {
		navigate('/Addbook');
	};


	const handleClickedit = (id) => {
		navigate('/editt/'+ id )
	};

	console.log(books);

	return (
		<div>
			<h1> hello {user && user.email}</h1>
			<img
				src={add}
				alt='add'
				width='60'
				height='75'
				onClick={() => {
					handleClickadd();
				}}
			/>
			<div class='tableMargin'>
				{books.map((book) => (
					<div class='tableTeam'>
						<table>
							<tr>
								<td>
									<img class='edit' src={edit} alt='edit' height='20' onClick={() => handleClickedit(book._id)}/>
									<img
										class='delete'
										src={del}
										alt='delete'
										height='20'
										onClick={() => dispatch(deletebook(book._id))}
									/>
								</td>

								<td class='img'>
									<img src={book.images} height='70' />
								</td>
								<td style={{ width: '120px' }}> {book && book.name} </td>
								<td style={{ width: '120px' }}> {book && book.author} </td>
								<td style={{ width: '120px' }}> {book && book.Genre} </td>
								<td style={{ width: '120px' }}> {book && book.price} </td>
							</tr>
						</table>
					</div>
				))}
			</div>
		</div>
	);
}

export default Profile;
