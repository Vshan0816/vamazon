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

    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <div id="outerDiv">
                <div id="innerDiv">
                        <img src={AmazonLogo} alt="AmazonLogo"></img>
                </div>
            </div>   
    
            <div id="formDiv">      
                    
                    
                    <label>Email
                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <label>Password
                        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </label>
                    <button>Sign In</button>
            </div>
        </form>
        
    )
}

export default LoginFormPage