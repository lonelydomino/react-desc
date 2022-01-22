import React, { useContext, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import MainBanner from '../components/MainBanner'
import ImageWithText from '../components/ImageWithText'
import Categories from '../components/Categories'


const Home = () => {
    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const {fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    console.log(products)

    if (!products) return  <div>Loading...</div>

    return (
        <Box>
            <MainBanner />
            <ImageWithText reverse image="https://cdn.pixabay.com/photo/2015/01/21/17/22/shopping-606993_1280.jpg" heading="What is DESC?" text={placeholderText} buttonText="Learn More" />
            <ImageWithText image="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg" heading="Heading" text={placeholderText} buttonText="Donate"/>
            <ImageWithText reverse image="https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg" heading="Heading" text={placeholderText} buttonText="Contact Us"/>
            {/* <Grid templateColumns="repeat(3, 1fr)">
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
            </Grid> */}
            <Categories />

        </Box>
    )
}

export default Home
