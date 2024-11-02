import "./NavBarApp.css";
import iconeApp from "../../assets/images/icone.png";
import iconeClose from "../../assets/images/closeButton.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState } from "react";
import { useMarkdown } from "../../providers/MarkdownProvider";
import DownloadFile from "../DownloadFile/DownloadFile";
import { useLocalStorageContext } from "../../providers/LocalStorageProvider";

function NavBarApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [parentPosition, setParentPosition] = useState(0);
  const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
  const [oldname, setOldName] = useState("")

  function updateTitleMarkdown(event) {
    const value = event.target.value;
    setTitleMarkdown(value);
  };

  function saveOldName(event) {
    setOldName(titleMarkdown)
  }

  function isVoid(event) {
    setTitleMarkdown(oldname)
  }

  function addTitleUpdate(event) {
    if (event.key === "Enter") {
      if (titleMarkdown != "") {
        setOldName(titleMarkdown)
        
      } else {
        setOldName("Document")
      }
      setTimeout(()=>{
        event.target.blur();
      }, 1)
    }
  }

  return (
    <nav className="navBar">
      <div className="moveBar">
        <div className="nameProgram">
          <img className="iconeProgram" src={iconeApp} alt="icone" />
          <div className="title"> 
          <input id="titleMarkdown" type="text" value={titleMarkdown} onChange={updateTitleMarkdown} onFocus={saveOldName} onKeyDown={addTitleUpdate} onBlur={isVoid}/>
          <p> - MarkdownXp.exe</p>
          </div>
        </div>
        <img className="buttonClose" src={iconeClose} alt="icone" />
      </div>
      <div className="toolBar">
        <div href="" 
          onMouseEnter={()=> {setIsHovered(true); setParentPosition(0)}}
          onMouseLeave={()=> setIsHovered(false)}
          className="link"
          >File

          {isHovered && (parentPosition == 0) && (
              <DropdownMenu Dict_link={{new:'', download:'', save:'', import:''}}/>
          )}
        </div>

        <div href=""                
          onMouseEnter={()=> {setIsHovered(true); setParentPosition(1)}}
          onMouseLeave={()=> setIsHovered(false)}
          className="link"
          >Edit
          {isHovered && (parentPosition == 1) && (
              <DropdownMenu Dict_link={{test:'test'}}/>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBarApp;
