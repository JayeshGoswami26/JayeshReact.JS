import { Context, createContext, useContext } from "react";

export const todoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "todo",
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,Todo)=>{},
    deletTodo : (id)=>{},
    toggleTodo : (id)=>{},
}
)

export const useTodo = ()=>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider
