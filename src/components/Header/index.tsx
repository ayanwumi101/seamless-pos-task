import { Box, Flex, Text } from '@chakra-ui/react'
import Logo from '../Logo'
import { LoveIcon, UserIcon, SearchIcon, CartIcon } from '../Icons'
import { Link } from 'react-router-dom'


const Header = () => {
    const links = ['Home', 'Shop', 'About', 'Contact']
    return (
        <Box as='header' boxShadow='md' py='4' position='sticky' top='0' w='100%' bg='white'>
            <Box as='nav' w='95%' mx='auto'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Link to='/'><Logo /></Link>
                    <Box display={{base: 'none', md: 'block', lg: 'block'}}>
                        <Flex gap='75px'>
                            {links.map((item, index) => <Text key={index} fontWeight={500}>{item}</Text>)}
                        </Flex>
                    </Box>
                    <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
                        <Flex alignItems='center' gap='45px'>
                            <UserIcon />
                            <SearchIcon />
                            <LoveIcon />
                            <CartIcon />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Header