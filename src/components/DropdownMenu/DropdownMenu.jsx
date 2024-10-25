import "./DropdownMenu.css"

function DropdownMenu({Dict_link}) {
    return (
        <div className="dropdownNav">
            {
                Object.entries(Dict_link).map(([text, link]) => {
                    return <a href={link}>{text}</a>
                })
            }
        </div>
    )
}

export default DropdownMenu