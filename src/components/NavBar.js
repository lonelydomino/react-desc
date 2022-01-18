import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Text, Image, Icon } from '@chakra-ui/react'
import { useContext } from 'react'


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
    return (
        <Box>
            <Text>Open Menu</Text>
            <Text>Logo</Text>
            <Text>Cart</Text>
        </Box>
    )
}
export default NavBar
