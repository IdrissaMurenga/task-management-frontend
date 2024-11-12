'use client'
import { createContext, useContext } from "react"
import useQueries  from "../hooks/useQueries"
import { ContextType } from "../types/ContextType"
import useMutation from "../hooks/useMutation"

const TodoContext = createContext<ContextType | undefined>(undefined)

//creating a reusable ocntext to all components
export const useData = () => {
    const context = useContext(TodoContext)

    if (!context) {
        throw new Error('useData must be called before')
    }
    return context
}

export default function TodoContextProvider({ children }: { children: React.ReactNode }) {
    const { tasks, error, setTasks, loading, currentDate } = useQueries()
    const { handleSubmit, text, setText, toggleComplete, completedTaskCount, incompleteTaskCount, textToEdit, setTextToEdit, clickToEditTask, editTask, deleteTask } = useMutation(tasks, setTasks)
    return (
        <TodoContext.Provider value={{
            tasks, error, setTasks, loading, currentDate, handleSubmit, text, setText,
            toggleComplete, completedTaskCount, incompleteTaskCount, textToEdit, setTextToEdit,
            clickToEditTask, editTask, deleteTask
        }}>
            {children}
        </TodoContext.Provider>
    )
}
