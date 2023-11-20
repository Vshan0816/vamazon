import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/session"
import { Redirect } from "react-router-dom/cjs/react-router-dom"
import './LoginForm.css'
import logo from "../../assets/Logo1.png"
import Errors from "../Errors"

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(login({email, password}))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if, e.g., server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const loginDemo = (e) => {
        e.preventDefault()
        return dispatch(login({email: "demo@user.io", password:"password"}))
    }
    return (
        <div className="outerDiv">
            <form className="form" onSubmit={handleSubmit}>
                <div className="logoDiv">   
                    <img className="logo" src={logo}></img>    
                </div>
                     
                <Errors errors={errors}/>
                    
                <div className="formDiv">  
                           
                    <div id="signIn">
                        <h1 className="h1">Sign in</h1>
                    </div>
                    <div className="signInLabel">
                        <label>Email</label>
                    </div>
                    <div>
                        <input className="input" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>    
                    
                    <div className="signInLabel">
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="password" className="input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>    
                    
                    <button className="button" type="submit">Login</button>
                    <button className="button" onClick={loginDemo}>Login Demo User</button>
                    

                    
                </div>
            </form>
        </div>
    )
}

export default LoginFormPage