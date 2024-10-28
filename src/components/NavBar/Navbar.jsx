import windowslogo from "../../assets/images/windowslogo.png";
import "./nav.css";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="menuBar">
      <button onClick={toggleMenu} className="startButton">
        <img src={windowslogo} className="windowslogo" alt="Windows Logo" />
        <p>start</p>
      </button>
      <div className="language">
        <p>EN</p>
      </div>
      <div className="hour">
        <p>11:11</p>
        <p>YYYY-DD-MM</p>
      </div>
      {menuVisible && <Menu />}
    </nav>
  );
}
