import './SaveFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { useLocalStorageContext } from '../../providers/LocalStorageProvider';


function SaveFile() {
    // Custom hook to manage the markdown content and the title of the markdown
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
    // Custom hook to manage markdowns stored data and the id of the current one.
    const { data, setData, currentId, setCurrentId } = useLocalStorageContext();

    function Save() {
        // Save the current markdown into the localstorage
        // Check is the current id is set
        // - true : find the corresponding object and add the modification (title and body)
        // - false : create a new markdown in the local storage and set the current id to its newly created id
        if (currentId) {
            setData(data.map(file => {
                if (file.id === currentId) {
                    return { ...file, title: titleMarkdown, body: markdown };
                }
                return file;
            }))
        } else {
            const id = Date.now()
            setData([...data,{id:id,title:titleMarkdown, body:markdown}])
            setCurrentId(id)
        }
        
    }

    return (
        <button key="Save" className='Save' onClick={Save}>Save</button>
    )
}

export default SaveFile