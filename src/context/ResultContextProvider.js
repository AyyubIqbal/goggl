import React, { createContext, useState } from 'react';

const ResultContext = createContext()
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // /search, /videos, /images
    const getResult = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseURL}${type}`)
    }
}