'use client'
import { DialogHeader, DialogTitle, DialogActionTrigger } from '@/ui/dialog'
import { Flex, Input, Button } from '@chakra-ui/react'
import { useData } from '../context/TodoContext'
import { Tasks } from '../types/taskType'
import { FC, FormEvent } from 'react'

interface TaskProp {
    task: Tasks
    editTask: (id: string, text: string) => void
}

const EditTodoForm: FC<TaskProp> = ({ task, editTask }) => {
    const { textToEdit, setTextToEdit } = useData()

    const submitEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editTask(task.id, textToEdit)
    }
    
    return (
        <>
            <DialogHeader px='0'>
                <DialogTitle color={'text-primary'} fontWeight='bold'>
                    Edit Your Task
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={submitEdit}>
                <Flex gap='0.7rem'>                    
                    <Input
                        value={textToEdit}
                        onChange={(e) => setTextToEdit(e.target.value)}
                        maxW="20rem"
                        color={'text-primary'}
                        placeholder="Edit Your Task Here...."
                    />
                    <DialogActionTrigger asChild>
                        <Button type='submit' bgColor='btn-secondary'>Submit</Button>
                    </DialogActionTrigger>
                </Flex>
            </form>
        </>
    )
}

export default EditTodoForm
