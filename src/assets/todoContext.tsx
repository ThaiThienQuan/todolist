import { createContext } from "react";

const todoContext= createContext({});
export const todoProvider=({children}) =>{
    return(<todoContext.Provider value={}>{children}</todoContext.Provider>)
}
export default todoContext;