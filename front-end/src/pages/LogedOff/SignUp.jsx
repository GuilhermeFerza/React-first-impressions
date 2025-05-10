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

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setError(""); // Limpa o erro se as senhas coincidirem

    const user = {
      email,
      password,
    };

    try {
      // Enviar os dados para o backend
      const response = await axios.post(
        "http://localhost:5000/api/users",
        user
      );
      alert(response.data.message); // Mostrar a mensagem de sucesso
      localStorage.setItem("userEmail", email);
      navigate("/username");
    } catch (error) {
      const backendMessage =
        error.response?.data?.message ||
        "Erro desconhecido ao salvar o usuário";
      console.error("Erro ao salvar o usuário:", error.response?.data || error);
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
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="email"
                    placeholder="e-mail"
                    required
                  />
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="password"
                    placeholder="Password"
                    required
                  />
                  <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    aria-label="type your password again"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Type your password again"
                    required
                  />
                  <label className="authorization">
                    <p>do you authorize Kreda to use your data?</p>
                    <input
                      type="checkbox"
                      name="authorization"
                      className="auth-box"
                      required
                    />
                  </label>
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
export default SignUp;
