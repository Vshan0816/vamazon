import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css'
import whiteLogo from '../../assets/WhiteLogo.png'
import LoginButton from './LoginButton';
import cart from '../../assets/cart.png'

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
  
  
    return (
      <div className="navbar">
          <div className="one">
              <img src={whiteLogo} className="navElement" alt="logo"/>
          </div>
          <div className="two">
              
          </div>
          <div className="three">
               <LoginButton user={sessionUser}/>
               <div className="cart">
                  <Link to="/cart"><img src={cart} alt="cart"></img></Link>
               </div>
          </div>

      </div>
    );
  }
  
 

  export default Navigation;