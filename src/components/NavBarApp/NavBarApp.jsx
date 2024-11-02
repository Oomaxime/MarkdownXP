import "./NavBarApp.css";
import iconeApp from "../../assets/images/icone.png";
import iconeClose from "../../assets/images/closeButton.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState } from "react";
import { useMarkdown } from "../../providers/MarkdownProvider";
import DownloadFile from "../DownloadFile/DownloadFile";
import { useLocalStorageContext } from "../../providers/LocalStorageProvider";

function NavBarApp() {
  // State to track if the navbar is being hovered
  const [isHovered, setIsHovered] = useState(false);
  // State to track the parent position (categories) for the tool bar
  const [parentPosition, setParentPosition] = useState(0);
  // State to track the old name of the markdown file (the title)
  const [oldname, setOldName] = useState("")
  // Custom hook to manage the markdown content and the title of the markdown
  const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
  


  function updateTitleMarkdown(event) {
    //Get the value from the input and update the title with the hook
    const value = event.target.value;
    setTitleMarkdown(value);
  };

  function saveOldName(event) {
    // Save the current title of the markdown
    setOldName(titleMarkdown)
  }

  function isVoid(event) {
    // Put the old name as the current one (used when the input value received contains nothing)
    setTitleMarkdown(oldname)
  }

  function addUpdatedTitle(event) {
    // Verify if the user want to apply the changes (here if he pressed enter)
    // Then do a if/else statement to see wether the input is blank or not
    if (event.key === "Enter") {
      if (titleMarkdown != "") {
        // Input is not blank => set the old name as the new one
        setOldName(titleMarkdown)
        
      } else {
        // Input is blank => set the old name as a default name : "Document"
        setOldName("Document")
      }

      // Make the user leave the input when enter is pressed
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
          <input id="titleMarkdown" type="text" value={titleMarkdown} onChange={updateTitleMarkdown} onFocus={saveOldName} onKeyDown={addUpdatedTitle} onBlur={isVoid}/>
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
              <DropdownMenu Dict_link={{Demonstration:'Demonstration'}}/>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBarApp;
