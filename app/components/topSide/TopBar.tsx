'use client'
import { useData } from '../../context/TodoContext';
import { Avatar } from '@/ui/avatar'
import { DialogBody, DialogContent, DialogRoot, DialogTrigger } from '@/ui/dialog';
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { HiPlus } from 'react-icons/hi';
import AddTodoForm from '../AddTodoForm';


const TopBar = () => {
    const { currentDate } = useData()
    return (
        <Grid bgColor='bg-secondary' p='1rem' roundedTop='1rem' gap='1rem'>
            <Flex alignItems='center' justifyContent='space-between'>
                <Text color={'text-primary'} fontWeight='bold' fontSize='text-xl'>Welcome Idriss</Text>
                <Avatar name='Idriss Juma' src='https://bit.ly/dan-abramov' />
            </Flex>
            <Flex alignItems='center' justifyContent='space-between'>
                <Box>
                    <Text fontWeight='bold' fontSize='text-lg'>Today's Task</Text>
                    <Text color='text-secondary' fontStyle='italic'>{currentDate}</Text>
                </Box>
                <DialogRoot size='sm'>
                    <DialogTrigger asChild>
                        <Button colorPalette='btn-primary' color='btn-secondary' bgColor='btn-primary' gap='0.2rem' rounded='0.75rem' fontSize='text-base'>
                            <HiPlus size={24} />
                            <Text pt='0.3rem'>New Task</Text>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogBody>
                            <AddTodoForm />
                        </DialogBody>
                    </DialogContent>
                </DialogRoot>
            </Flex>
        </Grid>
    )
}

export default TopBar
