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
                <div class="loginDiv-content">
                    <button>Sign In</button>
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