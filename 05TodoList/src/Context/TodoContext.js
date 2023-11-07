import {useState, createContext } from 'react'

export const TodoContext = createContext({})


export const useTodo = ()=>{
    return userContext(
        TodoContext
    )
}

export const TodoProvider = TodoContext.Provider