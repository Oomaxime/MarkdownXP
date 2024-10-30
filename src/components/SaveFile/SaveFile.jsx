import './SaveFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { useLocalStorageContext } from '../../providers/LocalStorageProvider';


function SaveFile() {
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
    const { data, setData, currentId, setCurrentId } = useLocalStorageContext();

    function Save() {
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
        <button className='Save' onClick={Save}>Save</button>
    )
}

export default SaveFile