import TitleBar from "../TitleBar/TitleBar";
import { useMarkdown } from "../../providers/MarkdownProvider";
import Markdown from "markdown-to-jsx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./Preview.css"


function Code({ className = '', children }) {
    const language = className.replace("lang-", "");
    return (
    <div className="codeBlock">
    <SyntaxHighlighter language={language.toLowerCase()} style={materialLight}>
        {children}
    </SyntaxHighlighter>
    </div>
);
}


function Preview() {
    const [markdown] = useMarkdown()

    return (
        <div className="preview">
            <TitleBar title="Preview"/>
            <div className="preview__scroll">
            <Markdown 
                options={{
                    overrides: {
                        code: {
                            component: Code,
                        },
                        },
                }}
            >
                { markdown }
            </Markdown>
            </div>
        </div>
    );
}

export default Preview;