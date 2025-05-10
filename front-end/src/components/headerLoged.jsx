import { useEffect, useState } from "react";
import "../css/App.scss";
import "../css/headerLog.scss";
import Menu from "../components/Menu.jsx";
import Logo from "../assets/favicon.png";
import User from "../assets/user.svg";

import { Link } from "react-router-dom";

function HeaderLoged() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <Link to="/loged">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="menu" onClick={toggleMenu}>
              <div className="barras"></div>
              <div className="barras"></div>
              <div className="barras"></div>
            </div>
            <div className="lado-direito">
              <ul></ul>
              <div className="userarea">
                <img src={User} alt="User" />
                <p>Nome do usuario</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} />
    </>
  );
}

export default HeaderLoged;
