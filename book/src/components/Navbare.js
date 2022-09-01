


import React, { useEffect } from 'react';
import {Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {getcurrent, getusers, logout} from '../redux/actions/authactions'
import { useSelector, useDispatch } from 'react-redux';
import { getbooks} from '../redux/actions/bookactions';
import Profile from './Profile';


function Navbare() {

  const auth = useSelector(state => state.authReducer.auth)
  const dispatch= useDispatch();

  useEffect(()=> {
    dispatch(getbooks());
  }, []);

  const user= useSelector(state => state.authReducer.user)
  useEffect(()=> {
    dispatch(getcurrent());
  }, []);

  return <div>

    {
     localStorage.getItem('token') && auth && user.role === "user" ?
      <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link as={Link} to='/' >Books</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/'  onClick={()=> dispatch(logout())}  eventKey="link-1">Log out</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/Profile'    eventKey="link-1">Profile</Nav.Link>
  </Nav.Item>

</Nav>

: localStorage.getItem('token') && auth && user.role === "admin" ?

<Nav defaultActiveKey="/home" as="ul">
<Nav.Item as="li">
  <Nav.Link as={Link} to='/' >Books</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
  <Nav.Link  as={Link} to='/'  onClick={()=> dispatch(logout())}  eventKey="link-1">Log out</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
  <Nav.Link  as={Link} to='/AdminProfile'  onClick={()=>  dispatch(getusers())}    eventKey="link-1">Profile</Nav.Link>
</Nav.Item>

</Nav>

:
(

<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link as={Link} to='/' onClick={()=> dispatch(getbooks())}>Books</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/Login'   eventKey="link-1">Log in</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
     <Nav.Link  as={Link} to='/Signup'  eventKey="link-2">Sign Up</Nav.Link>
  </Nav.Item>
</Nav>)



}

  </div>;
}

export default Navbare;
