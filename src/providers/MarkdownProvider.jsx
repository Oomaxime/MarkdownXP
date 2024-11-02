// Followed tutorial : https://youtu.be/tYa0WMR0TGU?si=5ifU7xjyjqwahIn5
// And applied some changes to it
import { createContext, useContext, useState } from "react";

// Create a context for the markdown
const MarkdownContext = createContext(null);

// Custom hook to use the Markdown
export function useMarkdown() {
    return useContext(MarkdownContext);
}

// Provider component to manage markdown state
export default function MarkdownProvider({children}) {

    // State to track the markdown and its title
    const [markdown, setMarkdown] = useState('');
    const [titleMarkdown, setTitleMarkdown] = useState('Document')

    return (
      // Provide the state and updater functions to the context consumers
      <MarkdownContext.Provider value={[markdown, setMarkdown, titleMarkdown, setTitleMarkdown]}>
        { children }
      </MarkdownContext.Provider>
    );
  };
