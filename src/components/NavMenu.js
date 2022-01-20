import React from 'react'
import { ShopContext } from '../context/shopContext'
import {
    Box,
    Flex,
    Text,
    Grid,
    Drawer,
    Button,
    Image,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            <Link to="/">About Us</Link>
                            <Link to="/">Learn More</Link>
                            <Link to="/">Sustainability</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter textAlign="center">
                        <Text w="100%">Copyright DESC</Text>
                    </DrawerFooter>
            </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default NavMenu
