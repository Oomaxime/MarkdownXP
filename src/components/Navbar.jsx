import windowslogo from '../ressources/images/windowslogo.png';

export default function Navbar() {
    return <nav class="startButton">
        <ul>
            <a>
                    <li class="start">
                    <img src={windowslogo} class="windowslogo"></img>
                    <p> start </p> 
                    </li>
            </a>
        </ul>
        <div class="language">
            <p> EN </p>
        </div>
        <div class="hour">
            <p> 11:11 </p>
            <p> YYYY-DD-MM </p>
        </div>
    </nav>
}