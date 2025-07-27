import { createContext, useState } from "react";

const todoContext= createContext({todo:'id1',handleChange:()=>{}});
export const todoProvider=({children}) =>{
    const [todo, setTodo] = useState('id1');
    const handleChange=()=>{}
    return(<todoContext.Provider value={{todo,handleChange}}>{children}</todoContext.Provider>)
}
export default todoContext;