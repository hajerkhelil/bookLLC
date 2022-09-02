import { Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbare from './components/Navbare';
import Addbook from './components/seller/Addbook';
import Editt from './components/seller/Editt';
import AdminRoute from './components/admin/AdminRoute';
import UserList from './components/admin/UserList';
import { edituser } from './redux/actions/authactions';
import Editprofile from './components/Editprofile';
import BookList from './components/admin/BookList';
import HomePage from './components/home/HomePage';
import BookDetails from './components/home/BookDetails';
import PrivateRoute from './components/PrivateRoute';
import Panier from './components/Panier';
import ListUsers from './components/ListUsers';
import Profiles from './components/Profiles';
import SeeUsers from './components/SeeUsers';

function App() {
	return (
		<div>
			<Navbare />
			<Routes>
				<Route path='/signup' element={<Signup />}></Route>
				<Route path='/login' element={<Login />}></Route>

				<Route path='/profile' element={<Profile />}></Route>
				<Route path='/Addbook' element={<Addbook />}></Route>
				<Route path='/editt/:id' element={<Editt />}></Route>

				<Route path='/editprofile/:id' element={<Editprofile />}></Route>

				<Route path='/' element={<HomePage />}></Route>
				<Route path='/BookDetails' element={<BookDetails />}></Route>

				{/* <Route
					path='/panier'
					element={
						<PrivateRoute>
							<Panier />
						</PrivateRoute>
					}
				></Route> */}
				<Route path='/panier' element={<Panier />}></Route>

				<Route path='/SeeUsers' element={<SeeUsers />}></Route>
				{/* <Route path='/ListUsers' element={<ListUsers />}></Route> */}
				<Route path='/profiles' element={<Profiles />}></Route>

				<Route
					path='/AdminProfile'
					element={
						<AdminRoute>
							<UserList />
						</AdminRoute>
					}
				></Route>

				<Route
					path='/BookList'
					element={
						<AdminRoute>
							<BookList />
						</AdminRoute>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
