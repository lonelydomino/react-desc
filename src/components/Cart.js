import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
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
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

    return (
        <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {
            checkout.lineItems && checkout.lineItems.map(item => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                    <Flex alignItems="center" justifyContent="center">
                        <CloseIcon cursor="pointer" onClick={() => removeLineItem()}/>
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
            ))}
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button colorScheme='blue'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}

export default Cart
