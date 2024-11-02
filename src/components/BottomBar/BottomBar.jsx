// Followed tutorial : https://youtu.be/tYa0WMR0TGU?si=5ifU7xjyjqwahIn5
// And applied some changes to it
import { useEditorContext } from "../../providers/EditorProvider";
import "./BottomBar.css"

function Preview() {
    // Destructure words and chars from the editor context
    const { words, chars } = useEditorContext()

    return (
        <nav className="bottomNav">
            <p>words : {words}, chars : {chars}</p>
        </nav>
    );
}

export default Preview;