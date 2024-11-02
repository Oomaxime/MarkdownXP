import './NewFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { useLocalStorageContext } from '../../providers/LocalStorageProvider';

// Define the NewFile function
function NewFile() {
    // Custom hook to manage the markdown content and the title of the markdown
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
    // Custom hook to manage markdowns stored data and the id of the current one.
    const { data, setData, currentId, setCurrentId } = useLocalStorageContext();

    function NewMarkdown() {
        // Create a new markdown
        // set its unique id using Date.now() (output the time in milliseconds since the Unix Epoch)
        const id = Date.now()
        // set the markdown to a blank canvas
        setMarkdown("")
        // Input is blank => set the old name as a default name : "Change name here"
        setTitleMarkdown("Change name here")
        // set its data in the local storage
        setData([...data,{id:id,title:titleMarkdown, body:markdown}])
        // set the current id to the newly created markdown
        setCurrentId(id)
    }

    // Return a button that calls NewMarkdown when clicked
    return (
        <button className='New' onClick={NewMarkdown}>New</button>
    )
}

export default NewFile