import React, { useState } from "react";
import './Navbar.css';

function NavBar() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
  return (
    <div className="navbar">
      <div>
        <span className="loginicon">
          Sign In
          <button onClick={toggleModal}>sign In</button>
          {modal && (
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
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;