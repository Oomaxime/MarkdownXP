import { useState } from "react";
import TitleBar from "../TitleBar/TitleBar";
import { useMarkdown } from "../../providers/MarkdownProvider";
import "./Editor.css"
import { useEditorContext } from "../../providers/EditorProvider";
import PropTypes from 'prop-types';


function Editor() {
  // Use custom hook to manage markdown state
  const [markdown, setMarkdown] = useMarkdown();
  // Destructure functions to set word and character counts from the editor context
  const { setWords, setChars } = useEditorContext()

  // Function to count the number of words received
  function getWordsCount(str) {
    return (str.match(/(\w+)/g) || []).length;
  };

  // Function to count the number of characters received
  function getCharsCount(str) {
    return str.length;
  };

  // Function to handle updates to the markdown text area
  function updateMarkdown(event) {
    // Value from the current textarea value
    const value = event.target.value;

    // Update the state of the markdown, words count and chars count 
    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  return (
    <div className="editor__wrap">
      <TitleBar title={"Editor"}/>
      <textarea className="editor" value={markdown} onChange={updateMarkdown}/>
    </div>
  );
}

export default Editor;

