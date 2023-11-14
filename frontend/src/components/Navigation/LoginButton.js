import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import * as sessionActions from '../../store/session';

const LoginButton = ({user}) =>{
    const dispatch = useDispatch()
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

    if (user) {
       return (
        <>  
            <div></div>
            <div className="loginDiv">
                <span>
                    <p className="p1">Hello, {user.name}</p>
                    <p className="p2">Account, & Lists</p>
                </span>
                <div className="loginDiv-content">
                    <button
                         className="button2"
                         onClick={logout}
                         >Sign Out
                    </button>
                </div>
            </div>
            <div></div>
            <div className="cart"></div>
        </>
       )
    } else {
        return (
            <>  
                <div></div>
                <div className="loginDiv">
                    <span>
                        <p className="p1">Hello, sign in</p>
                        <p className="p2">Account, & Lists</p>
                    </span>
                    <div className="loginDiv-content">
                        <Link to="/login"><button className="button2">Sign In</button></Link>
                        <p className="p3">New Customer? <Link to="/signup">Start Here</Link></p>
                    </div>
                </div>
                <div></div>
                <div className="cart"></div>
            </>
           )
    }
}

export default LoginButton