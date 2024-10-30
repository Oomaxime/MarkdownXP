import "./DropdownMenu.css"
import DownloadFile from "../DownloadFile/DownloadFile"
import NewFile from "../NewFile/NewFile"

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

                        default:
                            return <a id={text} href={link}>{text}</a>;
                    }
                })
            }
        </div>
    )
}

export default DropdownMenu