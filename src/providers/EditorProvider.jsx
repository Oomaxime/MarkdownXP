// Followed tutorial : https://youtu.be/tYa0WMR0TGU?si=5ifU7xjyjqwahIn5
// And applied some changes to it
import React, { createContext, useContext, useState } from 'react';

// Create a context for the editor
const EditorContext = createContext();

// Custom hook to use the EditorContext
export function useEditorContext() {
    return useContext(EditorContext);
};

// Provider component to manage editor state
export default function EditorProvider({ children }) {
    
    // State to track the number of words and characters
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);

    return (
        // Provide the state and updater functions to the context consumers
        <EditorContext.Provider value={{ words, chars, setWords, setChars }}>
        {children}
        </EditorContext.Provider>
    );
};