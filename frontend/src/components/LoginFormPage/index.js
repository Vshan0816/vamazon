import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/session"

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label>Password
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <button>Sign In</button>
        </form>
    )
}

export default LoginFormPage