'use client'
import TasksList from './TasksList'
import { Reorder } from "framer-motion"
import { Box, Spinner,Text } from '@chakra-ui/react'
import { useData } from '@/app/context/TodoContext'

const AllTasks = () => {
  const { tasks, setTasks, loading, toggleComplete, clickToEditTask, editTask, deleteTask } = useData()

  const inCompletedTasks = tasks.filter(task => !task.completed)

  return (
    <Reorder.Group axis='y' values={tasks} onReorder={setTasks}>
      <Box bgColor='bg-secondary' px='0.2rem' pb='0.2rem' roundedBottom='0.875rem' >
        <Box bgColor='bg-primary' p='1rem' roundedBottom='0.875rem' overflowY="auto" h='22rem'>
          {loading
            ?
              (
                <Spinner size="xl" mx='10rem' my='8.2rem' />
              )
            : inCompletedTasks.length > 0 ?
              (
                inCompletedTasks.map((task) => (
                  <Reorder.Item key={task.id} value={task}>
                    <TasksList
                      key={task.id}
                      task={task}
                      toggleComplete={toggleComplete}
                      clickToEditTask={clickToEditTask}
                      editTask={editTask}
                      deleteTask={deleteTask}
                    />
                  </Reorder.Item>
                ))
              )
            :
              (
                <Text py='8.2rem' fontSize='text-lg' textAlign='center'>No Tasks Added Yet</Text>
              )
          }
        </Box>
      </Box>
    </Reorder.Group> 
  )
}

export default AllTasks
