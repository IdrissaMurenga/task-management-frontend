'use client'
import { FormEvent, useState } from "react"
import { Tasks } from "../types/taskType"

//graphQL query connection 
const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL

//graphQL query request
const GRAPHQL_REQUEST = async (query: string) => {

    const response = await fetch(API_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })

    if (!response.ok) {
        throw new Error('Failed to fetch tasks')
    }

    return await response.json()

}

const useMutation = (tasks: Tasks[], setTasks: (tasks: Tasks[]) => void) => {
    const [text, setText] = useState('');
    const [textToEdit, setTextToEdit] = useState('')

    const createTask = async () => {
        if (text.trim() === '') return;
        try {
            const query = `mutation{addTask(input:{text:"${text}"}) {id, text, completed, createdAt, updatedAt}}`;
            const response = await GRAPHQL_REQUEST(query)
            const addedTask = [...tasks, response.data.addTask]
            setTasks(addedTask)
            setText('')

        } catch (error) {
            console.error('Error adding task', error)
        }
    }
        
    const completedTaskCount = tasks.filter(task => task.completed).length
    const incompleteTaskCount = tasks.filter(task => !task.completed).length

    //Toggle the completed status of a task
    const toggleComplete = async (id: string, complete: boolean) => {
        try {

            // Query to update the completed in the task
            const query = `mutation {updateTask(id: "${id}", input: { completed: ${!complete}}) {id, text, completed, createdAt, updatedAt}}`

            // Execute the query and update the task in the tasks array
            const response = await GRAPHQL_REQUEST(query)

            const completedTask = response.data.updateTask

            const completedTasks = tasks.map((task) => {
                if (task.id === completedTask.id) {
                    return {...task, completed:completedTask };
                }
                return task;
            });
            setTasks(completedTasks);
        } catch (error) {
            console.error('Error completing task', error)
        }
    }

    const clickToEditTask = (task: Tasks) => {
        setTextToEdit(task.text)
    }

    const editTask = async (id: string, textToEdit: string) => {
        try {
            const query = `mutation { updateTask(id: "${id}", input: { text: "${textToEdit}" }) {id, text, completed, createdAt, updatedAt}}`
            const response = await GRAPHQL_REQUEST(query)
            const updatedTask = response.data.updateTask
            const updatedTasks = tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return {...task, text: updatedTask.text };
                }
                return task;
            })
            setTasks(updatedTasks)
        } catch (error) {
            console.error('Error updating task', error)
        }
    }

    const deleteTask = async (id: string) => {
        try {
            const remainingTasks = tasks.filter((task) => task.id !== id)
            setTasks(remainingTasks)
            const query = `mutation { deleteTask(id: "${id}") { id, text, completed, createdAt, updatedAt }}`
            await GRAPHQL_REQUEST(query)
        } catch (error) {
            console.error('Error deleting task', error)
        }
    }

    
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createTask()
    }
    return {
        handleSubmit, text, setText, textToEdit, setTextToEdit, clickToEditTask,
        editTask, toggleComplete, completedTaskCount, incompleteTaskCount, deleteTask
    }
    
};


export default useMutation