import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Flex, Box, Text, Icon, Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        
    }

    return (
        <Flex backgroundColor="black" flexDir="row" alignItems="center" justifyContent="space-between" p="2rem" >
            <Icon onClick={() => openMenu()} w={30} h={30} cursor="pointer" fill="white" as={ MdMenu } />
            <Link to="/">
                <Text color="white" fontWeight={150} w={100}>DESC Frontier</Text>
            </Link>
            <Box>
                <Icon w={30} h={30} cursor="pointer" fill="white" as={ MdShoppingBasket } onClick={() => openCart()} />
                <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
            </Box>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={<BiSearchAlt2 color='white' />}               />
                <Input color="white" placeholder='What are you looking for?' value={value} onChange={handleChange} />
            </InputGroup>
        </Flex>
    )
}
export default NavBar
