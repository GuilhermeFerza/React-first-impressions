import "../css/Menu.css";

function Menu({ isOpen }) {
  return (
    <div>
      <div className={`menu-suspenso ${isOpen ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#devices">Devices</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
