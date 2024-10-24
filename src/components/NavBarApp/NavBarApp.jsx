import "./NavBarApp.css"
import iconeApp from '../../images/icone.png'
import iconeClose from '../../images/close.png'


function Preview() {
    return (
        <nav className="navBar">
            <div className="moveBar">
                <div className="nameProgram">
                <img className="iconeProgram" src={iconeApp} alt="icone" />
                <p>Titre du fichier - MarkdownXp.exe</p>
                </div>
                <img className="buttonClose" src={iconeClose} alt="icone" />
            </div>
            <div className="toolBar">
                <a href="">File</a>
                <a href="">Edit</a>
            </div>
        </nav>
    );
}

export default Preview;