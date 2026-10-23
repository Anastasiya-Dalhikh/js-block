import { createContext, useContext, useState, type PropsWithChildren } from "react";

type SearchContextValue = {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextValue | null >(null);

export const SearchProvider = ({children}: PropsWithChildren) =>{
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('missing SearchProvider');
    }    
    return context;
}