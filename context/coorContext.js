import {createContext, useState} from 'react'

export const CoorContext = createContext()

export const CoorProvider = ({children}) => {

    const long = "-76.150038";
    const lat = "4.414848";


    const [coord, setCoord] = useState({
        latitud: long,
        longitud: lat,
    });

    return(
        <CoorContext.Provider value={{coord, setCoord}}>
            {children}
        </CoorContext.Provider>
    )
}