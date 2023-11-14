const LoginButton = ({user}) =>{
    if (user) {
       return (
        <div className="loginDiv">
            <p className="p1">hello, sign in</p>
            <p className="p2">Account, & Lists</p>
        </div>
       )
    } else {
        return
        <div className="loginDiv">
            <p className="p1">hello, sign in</p>
            <p className="p2">Account, & Lists</p>
        </div>
    }
}

export default LoginButton