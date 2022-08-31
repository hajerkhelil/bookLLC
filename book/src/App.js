import { Router,Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbare from './components/Navbare';
import Home from './components/home/Home';
import Addbook from './components/seller/Addbook';
import Editbook from './components/seller/Editbook';


function App() {
	return (
		<div>
			
			<Navbare/>

			<Routes>
				<Route path='/signup' element={<Signup/>}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/profile' element={<Profile />}></Route>

				{/* <Route path='/' element={<Home />}></Route> */}

				<Route path='/Addbook' element={<Addbook />}></Route>

				{/* still */}
				<Route path='/Editbook' element={<Editbook />}></Route>  



			</Routes>
		</div>
	);
}

export default App;
