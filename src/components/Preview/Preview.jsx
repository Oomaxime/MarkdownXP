import TitleBar from "../TitleBar/TitleBar";
import { useMarkdown } from "../../providers/MarkdownProvider";
import ReactMarkdown from "react-markdown";

function Preview() {
    const [markdown] = useMarkdown()

    return (
        <div>
            <TitleBar title="Preview"/>
            <div>
                <ReactMarkdown>{ markdown }</ReactMarkdown>
            </div>
        </div>
    );
}

export default Preview;