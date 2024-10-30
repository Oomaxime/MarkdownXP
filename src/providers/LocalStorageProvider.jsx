import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const useLocalStorageContext = () => {
    return useContext(LocalStorageContext);
};

export default function LocalStorageProvider({ children }) {
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("markdowns");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        localStorage.setItem('markdowns', JSON.stringify(data));
    }, [data, setData]);   

    return (
        <LocalStorageContext.Provider value={{ data, setData, currentId, setCurrentId }}>
            {children}
        </LocalStorageContext.Provider>
    );
};