import "./DropdownMenu.css"

function DropdownMenu({Dict_link}) {
    return (
        <div className="dropdownNav">
            {
                Object.entries(Dict_link).map(([text, link]) => {
                    return <a key={text} href={link}>{text}</a>
                })
            }
        </div>
    )
}

export default DropdownMenu