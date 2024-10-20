import { useState } from "react";
import TitleBar from "../TitleBar/TitleBar";
import { useMarkdown } from "../../providers/MarkdownProvider";
import "./Editor.css"

function Editor() {
  const [markdown, setMarkdown] = useMarkdown();
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  function getWordsCount(str) {
    return (str.match(/(\w+)/g) || []).length;
  };

  function getCharsCount(str) {
    return str.length;
  };

  function updateMarkdown(event) {
    const value = event.target.value;

    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  return (
    <div className="editor__wrap">
      <TitleBar title={"Editor"} aside={`${words} Words  ${chars} Characters`}/>
      <textarea className="editor" value={markdown} onChange={updateMarkdown}/>
    </div>
  );
}

export default Editor;

