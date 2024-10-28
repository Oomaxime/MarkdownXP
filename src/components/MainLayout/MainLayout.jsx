// Mettre des class pour le style du composant et du sous composant
import './MainLayout.css'

function MainLayout({ children }) {
    return (
        <main className='mainLayout'>
            { children }
        </main>
    );
};

MainLayout.Column = function Column({ children }) {
    return (
        <main className='mainLayout__col'>
            { children }
        </main>
    );
};

export default MainLayout;