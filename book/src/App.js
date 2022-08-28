
import React,{useContext} from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from './components/signUp/SignUp';

function App() {

  const [userData, setUserData] = React.useState({ token: undefined, user: undefined });
  const userDataC = React.useMemo(() => ({ userData, setUserData }, [userData, setUserData]))

  // console.log("userData",userData);

  return (
    <div >
<useContext.provider value={userDataC}>
<Routes>
<Route exact path='/register' component={SignUp} />
</Routes>
</useContext.provider>
    </div>
  );

}

export default App;
