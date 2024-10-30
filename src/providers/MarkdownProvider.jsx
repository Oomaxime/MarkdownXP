import { createContext, useContext, useState } from "react";

const MarkdownContext = createContext(null);

export const useMarkdown = () => {
    return useContext(MarkdownContext);
}

export default function MarkdownProvider({children}) {

    const [markdown, setMarkdown] = useState('');
    const [titleMarkdown, setTitleMarkdown] = useState('Document')

    return (
      <MarkdownContext.Provider value={[markdown, setMarkdown, titleMarkdown, setTitleMarkdown]}>
        { children }
      </MarkdownContext.Provider>
    );
  };
