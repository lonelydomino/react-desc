import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Flex, Box, Grid, Text, Image, Icon } from '@chakra-ui/react'
import { useContext } from 'react'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    return (
        <Flex backgroundColor="#dcdcdc" flexDir="row" justifyContent="space-between" p="2rem" >
            <Icon onClick={() => openMenu()} w={30} h={30} cursor="pointer" fill="black" as={ MdMenu } />
            <Link to="/">
                <Text w={100}>DESC(Logo placeholder?)</Text>
            </Link>
            <Icon w={30} h={30} cursor="pointer" fill="black" as={ MdShoppingBasket } onClick={() => openCart()} />
        </Flex>
    )
}
export default NavBar
