import windowslogo from "../../assets/images/windowslogo.png";
import "./nav.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";



export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [time, settime] = useState(new Date())
  

  useEffect(()=>{
    const intervalId = setInterval(async() => {
      settime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, [])

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
        <p>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <p>
          {String(time.getDate()).padStart(2,'0')}/{String(time.getMonth()+1).padStart(2, '0')}/{String(time.getFullYear()).padStart(2, '0')}
        </p>
      </div>
      {menuVisible && <Menu />}
    </nav>
  );
}
