import React from 'react'
import "./DownloadFile.css"
import { useMarkdown } from '../../providers/MarkdownProvider'

function DownloadFile() {
    // Custom hook to manage the markdown content and the title of the markdown
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();

    // Followed a tutorial and added modifications (don't have the link because I close the tab and I can't find it now)
    function Download() {
        // Create a new Blob object containing the markdown content.
        const blob = new Blob([markdown], {type: 'text/markdown'});

        // Create a temporary anchor element (<a>) to facilitate the download.
        const link = document.createElement('a');
        // Create a URL for the Blob object and set it as the href of the anchor.
        link.href = URL.createObjectURL(blob);
        // Set the download attribute to specify the filename for the downloaded file.
        link.download = titleMarkdown.replace(".","_") + ".md"
        
        // Append the anchor to the document body.
        document.body.appendChild(link);

        link.click();

        // Remove the anchor from the document body after the download is triggered.
        document.body.removeChild(link);
    }

    return (
        <button className='download' onClick={Download}>Download</button>
    )
}
export default DownloadFile