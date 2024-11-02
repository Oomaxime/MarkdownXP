import "./DropdownMenu.css"
import DownloadFile from "../DownloadFile/DownloadFile"
import NewFile from "../NewFile/NewFile"
import SaveFile from "../SaveFile/SaveFile";
import ImportFile from "../ImportFile/ImportFile";

function DropdownMenu({Dict_link}) {
    return (
        <div className="dropdownNav">
            {
                Object.entries(Dict_link).map(([text, link]) => {
                    switch (text) {
                        case 'download':
                            return <DownloadFile/>;                     

                        case 'new' :
                            return <NewFile/>;

                        case 'save' :
                            return <SaveFile/>

                        case 'import' :
                            return <ImportFile/>
                            
                        default:
                            return <a key={text} href={link}>{text}</a>;
                    }
                })
            }
        </div>
    )
}

export default DropdownMenu