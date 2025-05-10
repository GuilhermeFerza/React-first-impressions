import { useEffect, useState } from "react";
import "../css/App.scss";
import "../css/header.scss";
import Menu from "../components/Menu.jsx";
import Logo from "../assets/favicon.png";
import { Link } from "react-router-dom";

function Header() {
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
              <Link to="/home">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="menu" onClick={toggleMenu}>
              <div className="barras"></div>
              <div className="barras"></div>
              <div className="barras"></div>
            </div>
            <ul>
              <li>
                <Link to="/home#home">home</Link>
              </li>
              <li>
                <Link to="/home#devices">devices</Link>
              </li>
              <li>
                <Link to="/home#about">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} />
    </>
  );
}

export default Header;
