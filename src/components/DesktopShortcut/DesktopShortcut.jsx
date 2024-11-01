import PropTypes from "prop-types";
import "./desktopShortcut.css";

function DesktopShortcut({ label, icon, onClick }) {
  return (
    <button className="shortcutButton" onClick={onClick}>
      <div className="shortcutDiv">
        <img className="shortcutIcon" src={icon} />
        <img className="shortcutArrow" src="src/assets/images/iconArrow.png" />
      </div>
      <span className="shortcutSpan">{label}</span>
    </button>
  );
}

DesktopShortcut.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default DesktopShortcut;
