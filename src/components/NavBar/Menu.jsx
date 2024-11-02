import "./nav.css";
import shutdown from "../../assets/images/shutdown.png";
import markdown from "../../assets/images/markdown.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="windowsMenu">
      <div className="topBleu">ADMIN</div>
      <nav className="centralMenu">
        <li className="MenuButton">
          <Link to="/markdown">
            <img src={markdown} className="menuIcon" alt="Markdown Logo" />
            <div className="menu-item">Markdown</div>
            <div className="under-item"> Editor</div>
          </Link>
        </li>
      </nav>
      <div className="bottomBleu">
        <li className="MenuButton">
          <Link to="/">
            <img src={shutdown} className="shutdown" alt="Shut Down Logo" />
            SHUT DOWN 
          </Link>
        </li>
        </div>
    </nav>
  );
}
