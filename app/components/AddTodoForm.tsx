'use client'
import { DialogActionTrigger, DialogHeader, DialogTitle } from '@/ui/dialog'
import { Button, Input, Flex } from '@chakra-ui/react'
import { useData } from '../context/TodoContext'

const AddTodoForm = () => {
    const { text, setText, handleSubmit } = useData()
    return (
        <>
            <DialogHeader px='0'>
                <DialogTitle color={'text-primary'} fontWeight='bold'>
                    Add Your Task
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Flex gap='0.7rem'>                    
                    <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxW="20rem"
                        color={'text-primary'}
                        placeholder="Enter Your New Task Here...."
                    />
                    <DialogActionTrigger asChild>
                        <Button type='submit' bgColor='btn-secondary'>Submit</Button>
                    </DialogActionTrigger>
                </Flex>
            </form>
        </>
    )
}

export default AddTodoForm
