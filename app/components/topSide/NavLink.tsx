'use client'
import { FC } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex, Text, Badge } from '@chakra-ui/react';

interface NavLinkProps {
    href: string;
    label: string;
    num: number
}

const NavLink: FC<NavLinkProps> = ({ href, label, num }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} passHref>
            <Flex gap='0.5rem' alignItems='center' borderBottom={isActive ? '.2rem solid #0760fb' : '' } pb='1rem'>
                <Text color={isActive ? 'btn-secondary' : 'text-secondary'} pt='0.2rem'>{label}</Text>
                <Box>
                    <Badge variant="solid" size="sm" rounded='100rem' bgColor={isActive ? 'btn-secondary' : 'bg-third'}>
                        <Text pt='0.2rem' px='0.4rem'>{num}</Text>
                    </Badge>
                </Box>
            </Flex>
        </Link>
    )
}

export default NavLink
