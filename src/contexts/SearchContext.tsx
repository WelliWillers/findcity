import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextProps {
    children: ReactNode
}

type SearchContextData = {
    search: string;
    handleGetSearchText: Function;
}

const SearchContext = createContext({} as SearchContextData)

export function SearchContextProvider({children}: SearchContextProps){

    const [ search, setSearch ] = useState('')

    function handleGetSearchText(searchTex: string) {
        setSearch(searchTex)
    }

    return (
        <SearchContext.Provider value={{search, handleGetSearchText}}>
            {children}
        </SearchContext.Provider>
    )
}


export const useSearch = () => useContext(SearchContext)