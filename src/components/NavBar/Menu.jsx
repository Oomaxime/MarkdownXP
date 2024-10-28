import "./nav.css";

export default function Menu() {
  return (
    <nav className="windowsMenu">
      <div className="topBleu">ADMIN</div>
      <nav className="centralMenu">
        <div className="menu-item">Programmes</div>
        <div className="menu-item">Paramètres</div>
        <div className="menu-item">Documents</div>
      </nav>
      <div className="bottomBleu">BOTTOM BLUE</div>
    </nav>
  );
}
