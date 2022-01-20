import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
const Footer = () => {
    return (
        <Box backgroundColor="gray.700">
            <Grid templateColumns="repeat(3, 1fr)">
                <Text> Image Placeholder</Text>
                <VStack p="2rem">
                    <Link to="/">Summer</Link>
                    <Link to="/">Spring</Link>
                    <Link to="/">Winter</Link>
                </VStack>
                <VStack p="2rem">
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
            </Grid>
        </Box>
    )
}

export default Footer
