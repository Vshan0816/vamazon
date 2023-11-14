import { Link } from "react-router-dom/cjs/react-router-dom.min"

const LoginButton = ({user}) =>{
    if (user) {
       return (
        <>  
            <div></div>
            <div className="loginDiv">
                <span>
                    <p className="p1">Hello, sign in</p>
                    <p className="p2">Account, & Lists</p>
                </span>
                <div className="loginDiv-content">
                    <Link to="/login"><button className="button">Sign In</button></Link>
                    <p className="p3">New Customer? <Link to="/signup">Start Here</Link></p>
                </div>
            </div>
            <div></div>
            <div className="cart"></div>
        </>
       )
    } else {
        return
        <div className="loginDiv">
            <p className="p1">Hello, sign in</p>
            <p className="p2">Account, & Lists</p>
        </div>
    }
}

export default LoginButton