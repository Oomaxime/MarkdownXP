import React, { createContext, useContext, useState } from 'react';

const EditorContext = createContext();

export const useEditorContext = () => {
    return useContext(EditorContext);
};

export default function EditorProvider({ children }) {
    
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);

    return (
        <EditorContext.Provider value={{ words, chars, setWords, setChars }}>
        {children}
        </EditorContext.Provider>
    );
};