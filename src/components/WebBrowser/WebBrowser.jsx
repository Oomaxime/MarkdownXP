import "./webBrowser.css";

export default function WebBrowser() {
  return (
    <div className="browserWindow">
      <div className="browserWindowTitleBar">
        <div className="mainTitle">
          <img src="./src/assets/explorerLogo.png" alt="IE" />
          <span>Cool Music - Microsoft Internet Explorer</span>
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
      <div className="adressBar">
        <p>
          A<span>d</span>dress
        </p>
        <div className="urlInput">
          <div>
            <img src="./src/assets/iexplorePage.png" alt="IE page" />
            <p>https://www.youtube.com/watch?v=BYpKQ65DugI</p>
          </div>
          <img src="./src/assets/dropdownArrow.svg" alt="see more" />
        </div>
        <div className="goButton">
          <img src="./src/assets/greenArrow.svg" alt="go" />
          <p>Go</p>
        </div>
        <div className="linkDiv">
          <p>Links</p>
          <img
            className="blackArrowPicture"
            src="./src/assets/doubleArrow.svg"
            alt="see more"
          />
        </div>
      </div>
      <div className="browserContent">
        <div className="browserContentTitle">
          <p>Portfolio de jecko</p>
        </div>
        <div className="browserContentText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, purus a lacinia tincidunt, metus justo congue massa, nec
            fermentum velit nunc non metus. Nulla facilisi. Nullam nec
            consectetur nunc. Nulla facilisi. Nullam nec consectetur nunc. Nulla
            facilisi. Nullam nec consectetur nunc. Nulla facilisi. Nullam nec
            consectetur nunc.
          </p>
        </div>
      </div>
      <hr className="styledHr" />

      <div className="browserFooter">
        <img src="./src/assets/iexplorePage.png" alt="IE page" />
        <p>Done</p>
      </div>
    </div>
  );
}
