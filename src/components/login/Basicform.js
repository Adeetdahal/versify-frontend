import React, { useState } from "react";
import logo from "./../../images/logo.png";
import showPwdImg from "./../../images/eyeopen.svg";
import hidePwdImg from "./../../images/eyeclose.svg";
import { Link } from "react-router-dom";
import "./basicform.css";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div className="logo">
          <img src={logo} alt="logo" className="image1" />
        </div>
        <div className="line">
          <hr />
          <div className="signin">SIGN IN</div>
          <hr />
        </div>
        <form action="" onSubmit={submitForm} className="form">
          <div className="uname">
            <div className="icon">
              <i class="zmdi zmdi-email"></i>
            </div>
            <input
              type="text"
              placeholder="Email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>

          <div className="pwd">
            <div className="icon">
              <i class="zmdi zmdi-lock"></i>
            </div>
            <input
              type={isRevealPwd ? "text" : "password"}
              placeholder="Password"
              id="password"
              autocomplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <div className="span">
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? showPwdImg : hidePwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
                alt="shownhidepass"
                className="passpic"
              />
            </div>
          </div>
          <div className="warn">Forgot password?</div>
          <div className="button">
            <button type="submit" className="loginbtn">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
        <hr />
        <div className="register">
          New User?
          <Link to="/register">
            <span style={{ color: "blue" }}>&nbsp;Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Basicform;
