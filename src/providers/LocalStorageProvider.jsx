import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the local storage
const LocalStorageContext = createContext();

// Custom hook to use the LocalStorageContext 
export function useLocalStorageContext() {
    return useContext(LocalStorageContext);
};

// Provider component to manage local storage state
export default function LocalStorageProvider({ children }) {
    // Initialize state with data from localStorage, or an empty array if none exists
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("markdowns");
        return storedData ? JSON.parse(storedData) : [];
    });

    // State to track the currently selected item's ID
    const [currentId, setCurrentId] = useState(null)

    // Effect to update localStorage whenever the data changes
    useEffect(() => {
        localStorage.setItem('markdowns', JSON.stringify(data));
    }, [data, setData]);   

    return (
        // Provide the state and updater functions to the context consumers
        <LocalStorageContext.Provider value={{ data, setData, currentId, setCurrentId }}>
            {children}
        </LocalStorageContext.Provider>
    );
};