import { Box } from '@chakra-ui/react'
import React from 'react'
import TopBar from './TopBar'
import StatusTabs from './StatusTabs'

const NavBar = () => {
    return (
        <Box roundedTop='0.875rem' pt='1rem'>
            <TopBar />
            <StatusTabs />
        </Box>
    )
}

export default NavBar
