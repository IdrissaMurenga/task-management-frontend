'use client'
import { Reorder } from "framer-motion"
import { Box, Text } from '@chakra-ui/react'
import ClosedTaskList from './ClosedTaskList'
import { useData } from '@/app/context/TodoContext'

const ClosedTasks = () => {
  const { tasks, setTasks, deleteTask } = useData()
  
  const completedTasks = tasks.filter(task => task.completed)

  return (
      <Reorder.Group axis='y' values={tasks} onReorder={setTasks}>
        <Box bgColor='bg-secondary' px='0.2rem' pb='0.2rem' roundedBottom='0.875rem' >
          <Box bgColor='bg-primary' p='1rem' roundedBottom='0.875rem' overflowY="auto" h='22rem'>
            {completedTasks.length > 0 ?
                (
                  completedTasks.map((task) => (
                    <Reorder.Item key={task.id} value={task}>
                      <ClosedTaskList task={task} deleteTask={deleteTask} />
                    </Reorder.Item>
                  ))
                )
              :
                (
                  <Text py='8.2rem' fontSize='text-lg' textAlign='center'>No Closed Tasks</Text>
                )
            }
          </Box>
        </Box>
      </Reorder.Group> 
  )
}

export default ClosedTasks
