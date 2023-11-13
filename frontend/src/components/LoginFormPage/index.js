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
                <div id="formDiv">  
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <div id="signIn">
                        <h1>Sign In</h1>
                    </div>
                    <div id="email">
                        <label>Email
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </label>
                    </div>
                    <div id="password">
                        <label>Password
                            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </label>
                    </div>
                        <button>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginFormPage