import React, { useState } from 'react';
import { useMarkdown } from '../../providers/MarkdownProvider';
import "./ImportFile.css"

function FileUpload(title) {
    const [file, setFile] = useState(null);
    const [fileContent, setFileContent] = useState('');
    const [markdown, setMarkdown] = useMarkdown();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
        setFile(selectedFile);
        const reader = new FileReader();
        
        reader.onload = (e) => {
            setFileContent(e.target.result);
            setMarkdown(e.target.result);
        };
        
        reader.readAsText(selectedFile); 
        }
    };

    return (
        
        <a>
        <label htmlFor="file"> 
            {title}
        </label>
        <input id="file" className="input_file" type="file" accept=".md" onChange={handleFileChange}/>
        </a>
    );
}

export default FileUpload;