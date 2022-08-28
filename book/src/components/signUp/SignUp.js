import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function SignUp() {
	const [userData, setUserData] = useContext(UserContext);

	const [name, setname] = React.useState('');
	const [email, setemail] = React.useState('');
	const [password, setpassword] = React.useState('');

	return (
		<div>
			<form>
				<label>
					Enter your name:
					<input
						// className={sty.box}
						type='text'
						Value={userData.name}
						// name='participationCount'
						onChange={(e) => setname(e.target.value)}
					/>
				</label>

				<label>
					Enter your email:
					<input
						// className={sty.box}
						type='text'
						Value={userData.email}
						// name='participationCount'
						onChange={(e) => setemail(e.target.value)}
					/>
				</label>

				<label>
					Enter your password:
					<input
						// className={sty.box}
						type='text'
						Value={userData.password}
						// name='participationCount'
						onChange={(e) => setpassword(e.target.value)}
					/>
				</label>
			</form>
		</div>
	);
}

export default SignUp;
