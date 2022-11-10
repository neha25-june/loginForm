import React from "react";

const LoginForm = () => {

    return ( 
        <div>
            <form>
                <h1>Sign In</h1>
                <label>Username</label><br></br>
                <input
                    type="text"
                    name="username"
                    className="login-box"
                /><br></br>
                <label>Password</label><br></br>
                <input
                    type="password"
                    name="password"
                    className="login-box"
                /><br></br>
                <button>Login</button>
            </form>
        </div>
    );
    // );
}

export default LoginForm;