import React from 'react'
import "./DownloadFile.css"
import { useMarkdown } from '../../providers/MarkdownProvider'

function DownloadFile() {
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();

    function Download() {
        const blob = new Blob([markdown], {type: 'text/markdown'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = titleMarkdown + ".md" // FAIRE SECURITE SI L'UTILISATEUR METS DES . DANS LE TITRE
        
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    return (
        <button className='download' onClick={Download}>Download</button>
    )
}
export default DownloadFile