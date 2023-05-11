import React, {createContext, useState} from 'react';

export const LoadingContext = createContext();

export function LoadingProvider({children}) {

    const [loading, setLoading] = useState(false);
    const toggleLoading = () => {
        setLoading(prevState => !prevState);
    }
    return (
        <LoadingContext.Provider value={{loading, toggleLoading}}>{children}</LoadingContext.Provider>
    )
}
