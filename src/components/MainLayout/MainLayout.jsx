import './MainLayout.css'
// Followed tutorial : https://youtu.be/tYa0WMR0TGU?si=5ifU7xjyjqwahIn5
// And applied some changes to it


// Define the MainLayout functional component
function MainLayout({ children }) {
    return (
        <main className='mainLayout'>
            { children }
        </main>
    );
};

// Define a static property 'Column' on the MainLayout component
MainLayout.Column = function Column({ children }) {
    return (
        <main className='mainLayout__col'>
            { children }
        </main>
    );
};

export default MainLayout;