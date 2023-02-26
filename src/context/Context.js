import { createContext } from "react";

export const cartData= createContext()

export const Context= (props)=>{
    return(
        <cartData.Provider>
            {props.children}
        </cartData.Provider>
    )
}
