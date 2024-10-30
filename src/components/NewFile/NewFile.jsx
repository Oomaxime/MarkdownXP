import './NewFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'

function NewFile() {
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();

    function ResetMarkdown() {
        setMarkdown("")
        setTitleMarkdown("Document")
    }

    return (
        <button className='New' onClick={ResetMarkdown}>New</button>
    )
}

export default NewFile