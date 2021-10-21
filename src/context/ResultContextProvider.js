import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext()
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('elon mark');

    // /search, /videos, /images
    const getResult = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '273e4ba326msh79ad4365319dc62p143635jsnaedaed0ca4c2'
            }
        });

        const data = await response.json();

        console.log(data);

        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);