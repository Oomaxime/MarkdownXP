import { useLocalStorageContext } from "../../providers/LocalStorageProvider"
import './OpenedFiles.css'
import iconeClose from "../../assets/images/closeButton.svg";
import { useMarkdown } from "../../providers/MarkdownProvider";

function OpenedFiles() {
    const {data, setData, currentId, setCurrentId} = useLocalStorageContext();
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();


    function RemoveFile(idFileToRemove) {
        setData(data.filter((file)=> file.id != idFileToRemove))
        setMarkdown(File.body) // A AMELIORER
        setTitleMarkdown(File.title)
    }

    function OpenFile(idFileToOpen) {
        const File = data.filter((file)=> file.id === idFileToOpen)[0]
        setMarkdown(File.body) // A AMELIORER
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