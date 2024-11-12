'use client'
import { useEffect, useState } from "react"
import { Tasks } from "../types/taskType"

//graphQL query connection 
const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL

const useQueries = () => {
    //STATES
    const [tasks, setTasks] = useState<Tasks[]>([]) //taskes state
    const [loading, setLoading] = useState(true) //loading state
    const [error, setError] = useState('') //error state
    const [currentDate, setCurrentDate] = useState('') //current date


    //USE WFFECT HOOK FOR FETCHING DATA ON PAGE LOAD
    useEffect(() => {
        setLoading(true)
        // function to fetch data on page load
        const fetchData = async () => {
            try {
                
                const query = `query {tasks {id, text, completed, createdAt, updatedAt}}`
                const response = await fetch(API_URL as string, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks')
                }
                const data = await response.json();
                setTasks(data.data.tasks)
                
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        //set current date to current time
        const today = new Date()
        const todayDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        });
        setCurrentDate(todayDate)
    }, [])

    return {tasks, setTasks, loading, error, setError, currentDate}
}
export default useQueries