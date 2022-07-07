import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) =>{
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`,{
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': '6b49fcc796mshda9dbfb4b6db834p11282cjsn01eacaf68cac',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        })

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);