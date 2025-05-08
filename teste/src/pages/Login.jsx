import "../css/App.scss";
import "../css/media.scss";
import "../css/index.scss";
import "../css/Login.scss";
import Logo from "../assets/favicon.png";
import Seta from "../assets/arrowL.svg";
import LoginImg from "../assets/Login.jpg";
import Header from "../components/header.jsx";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <section>
        <div className="container-login">
          <div className="login-img-container">
            <img src={LoginImg} alt="login left" />
          </div>
          <div className="seta">
            <Link to="/home">
              <img src={Seta} alt="" />
            </Link>
          </div>
          <div className="login-space">
            <div className="login-box">
              <img src={Logo} />
              <h1>Sign-Up</h1>
              <div className="login-excerpt">
                <form action="">
                  <input
                    name="email"
                    type="email"
                    aria-label="email"
                    placeholder="E-mail"
                    required
                  />
                  <input
                    name="password"
                    type="password"
                    aria-label="password"
                    placeholder="Password"
                    required
                  />
                  <button action="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>2025 BankApp- All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Login;
