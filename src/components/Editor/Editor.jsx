import { useState } from "react";
import TitleBar from "../TitleBar/TitleBar";
import { useMarkdown } from "../../providers/MarkdownProvider";
import "./Editor.css"
import { useEditorContext } from "../../providers/EditorProvider";

function Editor() {
  const [markdown, setMarkdown] = useMarkdown();
  const { setWords, setChars } = useEditorContext()
  function getWordsCount(str) {
    return (str.match(/(\w+)/g) || []).length;
  };

  function getCharsCount(str) {
    return str.length;
  };

  function updateMarkdown(event) {
    const value = event.target.value;

    console.log(value)
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

// Mettre les proptypes

export default Editor;

