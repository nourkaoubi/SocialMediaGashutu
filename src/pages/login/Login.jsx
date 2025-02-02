import "./login.css";

function Login(){
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gashutu</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Gashutu..</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginButton"> Login </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
 export default Login ; 