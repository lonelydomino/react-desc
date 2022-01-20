import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
    Box,
    Flex,
    Text,
    Grid,
    Drawer,
    Button,
    Image,
    Link,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

    console.log(checkout)
    return (
        <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {
            checkout.lineItems?.length ? checkout.lineItems.map(item => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                    <Flex alignItems="center" justifyContent="center">
                        <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)}/>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        <Image src={item.variant.image.src}/>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        {item.title}
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        {item.variant.price}
                    </Flex>
                </Grid>
            )) : 
            <Box h="100%">
                <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                    Your Cart is empty!
                </Text>
            </Box> 
            }
          </DrawerBody>
        {
        checkout.lineItems?.length ?
          <DrawerFooter>
            <Link w="100%" href={checkout.webUrl}><Button w="100%" colorScheme='blue'>Checkout</Button></Link>
          </DrawerFooter> : null
}
        </DrawerContent>
      </Drawer>
    )
}

export default Cart
