import { useEditorContext } from "../../providers/EditorProvider";
import "./BottomBar.css"

function Preview() {

    const { words, chars } = useEditorContext()

    return (
        <nav className="bottomNav">
            <p>words : {words}, chars : {chars}</p>
        </nav>
    );
}

export default Preview;