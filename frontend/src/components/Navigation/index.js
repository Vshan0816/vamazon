import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css'
import whiteLogo from '../../assets/WhiteLogo.png'
import LoginButton from './LoginButton';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
  
    // let sessionLinks;
    // if (sessionUser) {
    //   sessionLinks = (
    //     <ProfileButton user={sessionUser} />
    //   );
    // } else {
    //   sessionLinks = (
    //     <>
    //       <NavLink to="/login">Log In</NavLink>
    //       <NavLink to="/signup">Sign Up</NavLink>
    //     </>
    //   );
    // }
  
    return (
      <div className="navbar">
          <div className="one">
              <img src={whiteLogo} className="navElement" alt="logo"/>
          </div>
          <div className="two">
              <p>hi</p>
          </div>
          <div className="three">
               <LoginButton user={sessionUser}/>
          </div>

      </div>
    );
  }
  
//   <ul>
//   <li>
//   <NavLink exact to="/">Home</NavLink>
//   {sessionLinks}
//   </li>
// </ul> 

  export default Navigation;