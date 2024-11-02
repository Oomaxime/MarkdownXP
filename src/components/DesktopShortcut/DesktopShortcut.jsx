import PropTypes from "prop-types";
import "./desktopShortcut.css";

// Reproduce the desktop shortcut of windows XP.
function DesktopShortcut({ label, icon, onClickProps }) {
  return (
    <button className="shortcutButton" onClick={onClickProps}>
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
  onClickProps: PropTypes.func,
};

export default DesktopShortcut;
