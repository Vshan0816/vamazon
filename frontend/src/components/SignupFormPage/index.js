import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Errors from "../Errors";
import logo from "../../assets/Logo1.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="outerDiv">
      <form className="form" onSubmit={handleSubmit}>
        <div className="logoDiv">   
          <img className="logo" src={logo}></img>    
        </div>

        <Errors errors={errors}/>

        <div className="formDiv">
          <div>
            <h1 className="h1">Create Account</h1>
          </div>
          <div className="signInLabel"> 
            <label>
              Your name
            </label>
          </div> 
          <div>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signInLabel">
            <label>
              Email
            </label>
          </div>
          <div>
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
          </div>
         
          <div className="signInLabel"> 
            <label>
              Password
            </label>
          </div>
          <div>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signInLabel"> 
            <label>
              Re-enter password
            </label>
          </div>
          <div>
              <input
                className="input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
          </div> 
            <button className="button" type="submit">Continue</button>
          
          <div>
            <p className="bottomText">already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;