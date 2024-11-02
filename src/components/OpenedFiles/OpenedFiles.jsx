import { useLocalStorageContext } from "../../providers/LocalStorageProvider"
import './OpenedFiles.css'
import iconeClose from "../../assets/images/closeButton.svg";
import { useMarkdown } from "../../providers/MarkdownProvider";

function OpenedFiles() {
    // Custom hook to manage markdowns stored data and the id of the current one.
    const {data, setData, currentId, setCurrentId} = useLocalStorageContext();
    // Custom hook to manage the markdown content and the title of the markdown
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();


    function RemoveFile(idFileToRemove) {
        // Remove a designated file from the localdata 
        const newData = data.filter((file)=> file.id != idFileToRemove)
        setData(newData)
        
        // Check if the newData contains elements :
        // - true : open the first stored markdown
        // - false : open a blank Markdown

        if (newData[0] != undefined) {
            const File = newData[0]
            setMarkdown(File.body)
            setTitleMarkdown(File.title)
        } else {
            setMarkdown("")
            setTitleMarkdown("Document")
        }
        
    }

    function OpenFile(idFileToOpen) {
        // Open a designated file from the localdata
        // Search the file data and set its values in the markdown body, tittle and the current id
        const File = data.filter((file)=> file.id === idFileToOpen)[0]
        setMarkdown(File.body)
        setTitleMarkdown(File.title)
        setCurrentId(idFileToOpen)
    }

    return (
        <div className="ListFile">
            {
                data.map((value)=>{
                    return <div key={value.id} className="File">
                        <button className="OpenFile" onClick={()=>{OpenFile(value.id)}}>{value.title}</button>
                        <button className="CloseButton" onClick={()=>{RemoveFile(value.id)}}><img src={iconeClose} alt="" /></button>
                        </div> 
                })
            }
        </div>
    )
}

export default OpenedFiles