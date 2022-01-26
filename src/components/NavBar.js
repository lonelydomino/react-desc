import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Flex, Box, Text, Icon, Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsArrowRightCircleFill } from 'react-icons/bs'
const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (e) => {
        console.log(value)
        //Show Search Results
    }

    return (
        <Flex backgroundColor="black" flexDir="row" alignItems="center" justifyContent="space-between" p="2rem" >
            <Icon onClick={() => openMenu()} w={30} h={30} cursor="pointer" fill="white" as={ MdMenu } />
            <Link to="/">
                <Text color="white" fontWeight={150} w={100}>DESC Frontier</Text>
            </Link>
            <InputGroup w="20%">
                <InputLeftElement pointerEvents='none' children={<BiSearchAlt2 color='white' />}               />
                <Input color="white" placeholder='Search' value={value} onChange={handleChange} />
                <InputRightElement>
                    <BsArrowRightCircleFill color="white" cursor="pointer" onClick={handleSubmit}/>
                </InputRightElement>
            </InputGroup>
            <Box>
                <Icon w={30} h={30} cursor="pointer" fill="white" as={ MdShoppingBasket } onClick={() => openCart()} />
                <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}
export default NavBar
