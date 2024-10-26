import { useRef, useState } from "react";
import "./webBrowser.css";
import PropTypes from "prop-types";

export default function WebBrowser({
  title,
  url,
  leftOffset,
  topOffset,
  children,
}) {
  const browserRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - browserRef.current.getBoundingClientRect().left,
      y: e.clientY - browserRef.current.getBoundingClientRect().top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      browserRef.current.style.left = `${e.clientX - offset.x}px`;
      browserRef.current.style.top = `${e.clientY - offset.y}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="browserWindow"
      ref={browserRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        left: leftOffset || "100px",
        top: topOffset || "100px",
      }}
    >
      <div className="browserWindowTitleBar" onMouseDown={handleMouseDown}>
        <div className="mainTitle">
          <img src="./src/assets/explorerLogo.png" alt="IE" />
          <span>{title || "MarkdownXP Explorer"}</span>
        </div>
        <img
          src="./src/assets/closeButton.svg"
          alt="close"
          className="closeButton"
        />
      </div>
      <div className="browserToolBar">
        <ul className="toolBarUL">
          <li>
            <span className="toolBarSpan">F</span>ile
          </li>
          <li>
            <span className="toolBarSpan">E</span>dit
          </li>
          <li>
            <span className="toolBarSpan">V</span>iew
          </li>
          <li>
            <span className="toolBarSpan">F</span>avorites
          </li>
          <li>
            <span className="toolBarSpan">T</span>ools
          </li>
          <li>
            <span className="toolBarSpan">H</span>elp
          </li>
        </ul>
        <div className="browserWindowsXpPicto">
          <img src="./src/assets/winXPpicto.png" alt="WindowsXP" />
        </div>
      </div>
      <hr className="styledHr" />
      <div className="adressBar">
        <p>
          A<span>d</span>dress
        </p>
        <div className="urlInput">
          <div>
            <img src="./src/assets/iexplorePage.png" alt="IE page" />
            <p>{url || "https://www.avoir20sur20.com/?=projetMarkdonwXP"}</p>
          </div>
          <img src="./src/assets/dropdownArrow.svg" alt="see more" />
        </div>
        <div className="goButton">
          <img src="./src/assets/greenArrow.svg" alt="go" />
          <p>Go</p>
        </div>
        <hr className="styledHrV" />
        <div className="linkDiv">
          <p>Links</p>
          <img
            className="blackArrowPicture"
            src="./src/assets/doubleArrow.svg"
            alt="see more"
          />
        </div>
      </div>
      <div className="browserContent">{children}</div>
      <hr className="styledHrWithDropShadow" />

      <div className="browserFooter">
        <img src="./src/assets/iexplorePage.png" alt="IE page" />
        <p>Done</p>
      </div>
    </div>
  );
}

WebBrowser.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
  leftOffset: PropTypes.string,
  topOffset: PropTypes.string,
};
