// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getbooks } from './../../redux/actions/bookactions';
// import { Button } from 'react-bootstrap';
// import edit from '../Icons/editorang.png';
// import style from './Home.css';


// function Home() {
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(getbooks());
// 	}, []);

// 	const books = useSelector((state) => state.bookReducer.books);

// 	return (
// 		<div>
// 			<div class='tableMargin'>
// 				{books.map((book) => (
// 					<div class='tableTeam'>
// 						<table>
// 							<tr>
// 								<td class='img'>
// 									<img src={book.images} width='60' height='75' />
// 								</td>
// 								<td style={{ width: '120px' }}> {book && book.name} </td>
// 								<td style={{ width: '120px' }}> {book && book.author} </td>
// 								<td style={{ width: '120px' }}> {book && book.Genre} </td>
// 								<td style={{ width: '120px' }}> {book && book.price} </td>
// 							</tr>
// 						</table>
// 						<td><img className={style.edit} src={edit} alt="edit" width='30' height='50'  /> </td>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Home;
