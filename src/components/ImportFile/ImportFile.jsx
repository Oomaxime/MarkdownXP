import './ImportFile.css'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { useLocalStorageContext } from '../../providers/LocalStorageProvider';


function ImportFile() {
    const [markdown, setMarkdown, titleMarkdown, setTitleMarkdown] = useMarkdown();
    const { data, setData, currentId, setCurrentId } = useLocalStorageContext();

    function Import(event) {
        const file = event.target.files[0];
        if (file){
            const id = Date.now();
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (e){
                const content = e.target.result;
                setMarkdown(content);
                setTitleMarkdown(file.name.replace('.md', ''));
                if (id) {
                    setData([...data, { id: id, title: titleMarkdown, body: content }]);
                    setCurrentId(id);
                }
            }
        }


    }

    return (
            <button key="Import" className="Import" onClick={() => document.querySelector('.FileInput').click()}>
            Import
                    <input type="file" accept=".md" onChange={Import} className="FileInput"/>
            </button>
    )
}

export default ImportFile