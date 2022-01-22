import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Image, Text, Button, Heading, Flex } from '@chakra-ui/react'

const ProductPage = () => {
    const { handle } = useParams()

    const { fetchProductsWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(()=> {
        fetchProductsWithHandle(handle)
    }, [fetchProductsWithHandle, handle])

    if(!product.title) return <div>Loading...</div>

    return (
        <Box padding="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" alignItems="center">
                    <Image src={product.images[0].src} />
                </Flex>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
                    <Heading pb="2rem">{product.title}</Heading>
                    <Text fontWeight="bold" pb="2rem">{product.variants[0].price}</Text>
                    <Text color="gray.500" pb="2rem">{product.description}</Text>
                    <Button _hover={{ opacity: '70%'}} w="10rem" backgroundColor="black" color="white" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Flex>
            </Grid> 
        </Box>
    )
}

export default ProductPage
