import './NewFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { useLocalStorageContext } from '../../providers/LocalStorageProvider';


function NewFile() {
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
    const { data, setData, currentId, setCurrentId } = useLocalStorageContext();

    function NewMarkdown() {
        const id = Date.now()
        setMarkdown("")
        setTitleMarkdown("Document")
        setData([...data,{id:id,title:titleMarkdown, body:markdown}])
        setCurrentId(id)
    }

    return (
        <button className='New' onClick={NewMarkdown}>New</button>
    )
}

export default NewFile