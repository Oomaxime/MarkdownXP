import './TitleBar.css'

function TitleBar({ title }) {
    // Return a Titlebar for the markdown (editor and preview)
    return (
        <div className='mb-4'>
            <div className='titleBar__wrap'>
                { title && <h4 className='mb-2'>{ title }</h4> }
            </div>
            <hr/>
        </div>
    )
}

export default TitleBar;