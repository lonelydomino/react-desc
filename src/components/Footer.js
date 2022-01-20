import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack, Center } from '@chakra-ui/react'
const Footer = () => {
    return (
        <Box backgroundColor="gray.500">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} color="white" fontWeight="bold">
                <Center p="2rem" alignItems="center" justifyContent="center">
                    <Image alignItems="center" boxSize="200px" borderRadius="full" src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" />
                </Center>
                <VStack p="5rem">
                    <Link to="/">Summer</Link>
                    <Link to="/">Spring</Link>
                    <Link to="/">Winter</Link>
                </VStack>
                <VStack p="5rem">
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
            </Grid>
            <Box>
                <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
                    ⓒ Copyright DESC
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
