import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import MainBanner from '../components/MainBanner'
import ImageWithText from '../components/ImageWithText'

const Home = () => {

    const {fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    console.log(products)

    if (!products) return  <div>Loading...</div>

    return (
        <Box>
            <MainBanner />
            <Grid templateColumns="repeat(3, 1fr)">
                {
                products.map(product => ( 
                    <Link to={`/products/${product.handle}`} key={product.title}>
                        <Box _hover={{opacity: '80%'}} textAlign="center">
                            <Image src={product.images[0].src}/>
                            <Text> {product.title} </Text>
                            <Text> ${product.variants[0].price}</Text>
                        </Box>
                </Link>
                ))
                }
            </Grid>
            <ImageWithText reverse image="https://cdn.pixabay.com/photo/2015/01/21/17/22/shopping-606993_1280.jpg" heading="Heading"/>
            <ImageWithText image="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg" heading="Deading"/>
            <ImageWithText reverse image="https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg" heading="Heading"/>

        </Box>
    )
}

export default Home
