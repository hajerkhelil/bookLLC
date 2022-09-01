import React from 'react';
import { useDispatch } from 'react-redux';
import { getbook } from '../../redux/actions/bookactions';
import { Link, useNavigate } from 'react-router-dom';
import edit from '../Icons/editorang.png';

function BookCard({ book }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div>
			{/* <a>
				<img src={book.images} alt='' />
			</a>
			<div >
				<div >
					<a
						onClick={() => {
							dispatch(getbook(book._id));
							navigate('/BookDetails');
						}}
					>
						Book Details
					</a>
				</div>
			</div> */}

			<div class='tableMargin'>
				<div class='tableTeam'>
					<table>
						<tr>
							<td class='img'>
								<img src={book.images} height='60'  style={{ width: '80px' }} />
							</td>
							<td style={{ width: '20px' }}> {book && book.name} </td>
							<img
								class='edit'
								src={edit}
								alt='edit'
								height='20'
								onClick={() => {
									dispatch(getbook(book._id));
									navigate('/BookDetails');
								}}
							/>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}

export default BookCard;
