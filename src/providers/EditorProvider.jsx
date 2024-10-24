import { createContext, useState } from 'react';
import { useMarkdown } from "../../providers/MarkdownProvider";
import { useState } from "react";

import { createContext, useState } from 'react';

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
    const [markdown, setMarkdown] = useState('');
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);

    function updateMarkdown(value) {
        setMarkdown(value);
        setWords(getWordsCount(value));
        setChars(getCharsCount(value));
    }

    function getWordsCount(str) {
        return (str.match(/(\w+)/g) || []).length;
    }

    function getCharsCount(str) {
        return str.length;
    }

    return (
        <EditorContext.Provider value={{ markdown, words, chars, updateMarkdown }}>
        {children}
        </EditorContext.Provider>
    );
};

export { EditorProvider, EditorContext };