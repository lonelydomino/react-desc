import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const MainBanner = () => {
    return (
        <Box backgroundColor="gray.300" w="100%" position="relative" h="70vh">
            <Image src="https://cdn.pixabay.com/photo/2017/08/06/22/52/blouse-2597205_1280.jpg" h="100%" m="auto" objectFit="contain" objectPosition={["top", "center"]}/>
            <Text position="absolute" bottom="10%" w="100%" textAlign="center" color="white" fontWeight="bold" fontSize="4rem">
                Introducing DESC Online Store
            </Text>
            <Center>
                <Button w="10rem" backgroundColor="black" color="white" _hover={{opacity: '70%'}} position="absolute" bottom="4%"> 
                    Shop Now
                </Button>
            </Center>
        </Box>
    )
}

export default MainBanner
