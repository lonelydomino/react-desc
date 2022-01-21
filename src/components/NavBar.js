import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Flex, Box, Grid, Text, Image, Icon, Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

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
        </Flex>
    )
}
export default NavBar
