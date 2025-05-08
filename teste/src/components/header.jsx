import { useEffect, useState } from "react";
import "../css/App.scss";
import Menu from "../components/Menu.jsx";
import Logo from "../assets/favicon.png";

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
    <div>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <a href="../App.css">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="menu" onClick={toggleMenu}>
              <div className="barras"></div>
              <div className="barras"></div>
              <div className="barras"></div>
            </div>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#devices">devices</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} />
    </div>
  );
}

export default Header;
