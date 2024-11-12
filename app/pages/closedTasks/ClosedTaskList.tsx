import { FC } from 'react'
import { Checkbox } from '@/ui/checkbox'
import { FcCheckmark } from 'react-icons/fc'
import { Tasks } from '@/app/types/taskType'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import DeleteIconBtn from '@/app/components/iconsBtn/DeleteIconBtn'

interface TasksProps {
    task: Tasks
    deleteTask: (id: string) => void
}

const ClosedTaskList: FC<TasksProps> = ({ task, deleteTask }) => {
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
                <Checkbox colorPalette='blue' size='sm' checked={task.completed} />
            </Flex>
            <hr />
            <Flex justifyContent='flex-end' pt='.6rem'>
                <DeleteIconBtn task={task} deleteTask={deleteTask}  />
            </Flex>
        </Grid>
    )
}

export default ClosedTaskList
