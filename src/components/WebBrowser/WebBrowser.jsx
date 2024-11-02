import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./webBrowser.css";
export default function WebBrowser({
  title = "MarkdownXP Explorer",
  url = "https://www.tpreact.com/?=projetMarkdonwXP",
  leftOffset = "0",
  topOffset = "0",
  size = { width: 800, height: 600 },
  children,
}) {
  const browserRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  //Setup of the drag window logic

  //change isDragging state to false when mouse is up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /**
   * If the user press down the mouse on the red cross, the window will be hidden
   * If the user keep press down the mouse on the title bar, the window offset will be updated and isDragging will be set to true
   */
  const handleMouseDown = (e) => {
    if (e.target.classList.contains("closeButton")) {
      browserRef.current.style.display = "none";
      return;
    }
    setIsDragging(true);

    setOffset({
      x: e.clientX - browserRef.current.getBoundingClientRect().left,
      y: e.clientY - browserRef.current.getBoundingClientRect().top,
    });
  };

  // Copilot give us the useCallback with useEffect tips to avoid infinite loop

  // If isDragging is true, the window will follow the mouse
  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        browserRef.current.style.left = `${e.clientX - offset.x}px`;
        browserRef.current.style.top = `${e.clientY - offset.y}px`;
      }
    },
    [isDragging, offset.x, offset.y]
  );

  /*
   *Add the event listener when the component is mounted
   * Remove the event listener when the component is unmounted
   */

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, handleMouseMove]);

  // Put the window on top when clicked
  const focusWindow = () => {
    const windows = Array.from(document.querySelectorAll(".browserWindow"));
    const currentZIndex = parseInt(browserRef.current.style.zIndex, 10) || 0;

    windows.forEach((window) => {
      const zIndex = parseInt(window.style.zIndex, 10) || 0;
      if (zIndex > currentZIndex) {
        window.style.zIndex = zIndex - 1;
      }
    });

    browserRef.current.style.zIndex = windows.length;
  };

  return (
    <div
      className="browserWindow"
      ref={browserRef}
      onMouseDown={focusWindow}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        left: leftOffset,
        top: topOffset,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="browserWindowTitleBar" onMouseDown={handleMouseDown}>
        <div className="mainTitle">
          <img src="./src/assets/images/explorerLogo.png" alt="IE" />
          <span>{title}</span>
        </div>
        <img
          src="./src/assets/images/closeButton.svg"
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
          <img src="./src/assets/images/winXPpicto.png" alt="WindowsXP" />
        </div>
      </div>
      <hr className="styledHr" />
      <div className="adressBar">
        <p>
          A<span>d</span>dress
        </p>
        <div className="urlInput">
          <div>
            <img src="./src/assets/images/iexplorePage.png" alt="IE page" />
            <p>{url}</p>
          </div>
          <img src="./src/assets/images/dropdownArrow.svg" alt="see more" />
        </div>
        <div className="goButton">
          <img src="./src/assets/images/greenArrow.svg" alt="go" />
          <p>Go</p>
        </div>
        <hr className="styledHrV" />
        <div className="linkDiv">
          <p>Links</p>
          <img
            className="blackArrowPicture"
            src="./src/assets/images/doubleArrow.svg"
            alt="see more"
          />
        </div>
      </div>
      <div className="browserContent">{children}</div>
      <hr className="styledHrWithDropShadow" />
      <div className="browserFooter">
        <img src="./src/assets/images/iexplorePage.png" alt="IE page" />
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
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};
