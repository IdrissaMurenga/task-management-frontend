'use client'
import { Flex } from "@chakra-ui/react"
import { useData } from '@/app/context/TodoContext'
import NavLink from "./NavLink"


const StatusTabs = () => {
    const { completedTaskCount, incompleteTaskCount } = useData()
    return (
        <Flex bgColor='bg-secondary' alignItems='center' justifyContent='space-around' gap='2rem' borderBottom='.1rem solid #d9d9d9'>
            <NavLink href="/" label="Taskes" num={incompleteTaskCount} />
            <NavLink href="/pages/closedTasks" label="Closed" num={completedTaskCount} />
        </Flex>
    )
}

export default StatusTabs
