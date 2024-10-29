import "./NavBarApp.css";
import iconeApp from "../../assets/images/icone.png";
import iconeClose from "../../assets/images/closeButton.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState } from "react";

function NavBarApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [parentPosition, setParentPosition] = useState(0);

  return (
    <nav className="navBar">
      <div className="moveBar">
        <div className="nameProgram">
          <img className="iconeProgram" src={iconeApp} alt="icone" />
          <p>Titre du fichier - MarkdownXp.exe</p>
        </div>
        <img className="buttonClose" src={iconeClose} alt="icone" />
      </div>
      <div className="toolBar">
        <a href="" 
          onMouseEnter={()=> {setIsHovered(true); setParentPosition(0)}}
          onMouseLeave={()=> setIsHovered(false)}
          className="link"
          >File

          {isHovered && (parentPosition == 0) && (
              <DropdownMenu Dict_link={{test:'test', dasdasd:'adad'}}/>
          )}
        </a>

        <a href=""                
          onMouseEnter={()=> {setIsHovered(true); setParentPosition(1)}}
          onMouseLeave={()=> setIsHovered(false)}
          className="link"
          >Edit
          {isHovered && (parentPosition == 1) && (
              <DropdownMenu Dict_link={{test:'test'}}/>
          )}
        </a>
      </div>
    </nav>
  );
}

export default NavBarApp;
