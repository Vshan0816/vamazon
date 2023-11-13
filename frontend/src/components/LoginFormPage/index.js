import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/session"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import AmazonLogo from "../../assets/AmazonLogo.png"
import './LoginForm.css'


const LoginFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    // if (sessionUser) return <Redirect to="/" />

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

    return (
        <div id="outerDiv">
            <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                <div id="formDiv">                   
                    <div id="signIn">
                        <h1 className="h1">Sign in</h1>
                    </div>
                    <div id="email">
                        <label>Email</label>
                    </div>
                    <div>
                        <input className="input" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>    
                    
                    <div id="password">
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="text" className="input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>    
                    
                    <button type="submit">Login</button>
                    <button type="submit">Login Demo User</button>
                    <button type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default LoginFormPage