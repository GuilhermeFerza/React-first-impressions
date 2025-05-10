import "../../css/App.scss";
import "../../css/media.scss";
import "../../css/index.scss";
import "../../css/Login.scss";
import Logo from "../../assets/favicon.png";
import Seta from "../../assets/arrowL.svg";
import LoginImg from "../../assets/Login.jpg";
import Header from "../../components/header.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserName = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail"); // pega o email salvo

    if (!email) {
      setError("Email não encontrado. Volte e cadastre-se.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/username",
        {
          email,
          userName,
        }
      );
      alert(response.data.message);
      navigate("/loged");
    } catch (error) {
      const backendMessage =
        error.response?.data?.message || "Erro ao salvar o username";
      setError(backendMessage);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section className="main">
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
              <img src={Logo} alt="" />
              <h1>Sign-Up</h1>
              <div className="login-excerpt">
                <form onSubmit={handleSubmit}>
                  <input
                    name="username"
                    type="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    aria-label="username"
                    placeholder="username"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
                <div className="afterSignUp">
                  <div className="errorbox">
                    {error && <p className="error">{error}</p>}
                  </div>
                  <div className="or">
                    <hr />
                    <p>or</p>
                    <hr />
                  </div>
                  <button className="SignIn">Sign-In</button>
                </div>
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
};
export default UserName;
