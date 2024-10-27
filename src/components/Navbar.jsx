import windowslogo from '../ressources/images/windowslogo.png';
import { useState } from 'react';
import Menu from './Menu';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="startButton">
            <ul>
                <a onClick={toggleMenu}>
                    <li className="start">
                        <img src={windowslogo} className="windowslogo"/>
                        <p>start</p>
                    </li>
                </a>
            </ul>
            <div className="language">
                <p>EN</p>
            </div>
            <div className="hour">
                <p>11:11</p>
                <p>YYYY-DD-MM</p>
            </div>
            {menuVisible && <Menu />}
        </nav>
    );
}