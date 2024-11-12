import { FC } from 'react'
import { Checkbox } from '@/ui/checkbox'
import { Tasks } from '@/app/types/taskType'
import { FcCheckmark } from "react-icons/fc";
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import EditIconBtn from '@/app/components/iconsBtn/EditIconBtn';
import DeleteIconBtn from '@/app/components/iconsBtn/DeleteIconBtn';

interface TasksProps {
    task: Tasks
    toggleComplete: (id: string, complete: boolean) => void
    editTask: (id: string, text: string) => void
    deleteTask: (id: string) => void
    clickToEditTask : (task: Tasks) => void

}

const TasksList: FC<TasksProps> = ({ task, toggleComplete, clickToEditTask, editTask, deleteTask }) => {
    return (
        <Grid bgColor='bg-secondary' p='1.5rem' mb='1rem' rounded='10px' boxShadow='md'>
            <Flex gap='0.5rem' justifyContent='space-between' alignItems='center' pb='.6rem' px='.3rem'>
                <Box>
                    <Text fontSize='text-lg' color={task.completed ? 'bg-third' : 'text-primary'}>{task.text}</Text>
                    {task.completed ? 
                        <Flex>
                            <Text color='green.400' fontSize='text-sm'>
                                completed
                            </Text>
                            <FcCheckmark />
                        </Flex>  : ""
                    }
                </Box>
                <Checkbox cursor='pointer' colorPalette='blue' size='sm' checked={task.completed} onChange={() => toggleComplete(task.id, !task.completed)} />
            </Flex>
            <hr />
            <Flex alignItems='center' justifyContent='flex-end' pt='.6rem'>
                <DeleteIconBtn task={task} deleteTask={deleteTask} />

                <EditIconBtn task={task} clickToEditTask={clickToEditTask} editTask={editTask} />
            </Flex>
        </Grid>
    )
}

export default TasksList
