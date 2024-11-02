import "./nav.css";
import shutdown from "../../assets/images/shutdown.png";
import markdown from "../../assets/images/markdown.png";
import explorerLogo from "../../assets/images/explorerLogo.png";
import { Link } from "react-router-dom";

export default function Menu({ reloadOnlyWebBrowsers }) {
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
        <li className="MenuButton" onClick={reloadOnlyWebBrowsers}>
          <img src={explorerLogo} className="menuIcon" alt="Explorer Logo" />
          <div className="menu-item">Internet</div>
          <div className="under-item">APIStorm</div>
        </li>
      </nav>
      <div className="bottomBleu">
        <li className="MenuButton">
          <Link to="https://google.com">
            <img src={shutdown} className="shutdown" alt="Shut Down Logo" />
            SHUT DOWN
          </Link>
        </li>
      </div>
    </nav>
  );
}
