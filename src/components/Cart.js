import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
    Drawer,
    Button,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

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
            This is your cart
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}

export default Cart
