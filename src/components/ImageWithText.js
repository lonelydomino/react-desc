import React from 'react'
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react'

const ImageWithText = ({ reverse, image, heading, text, buttonText }) => {

    const reverseSection =  reverse ? 'row-reverse' : 'row'
    
    return (
        <Box>
            <Flex flexDir={['column', reverseSection]} w="100%">
                <Image src={image} objectFit="cover" w={["100%", "50%"]} />
                <Flex w={["100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center" p="2rem">
                    <Heading p="11px">
                        { heading && heading }
                    </Heading>
                    <Text>
                        { text && text}
                    </Text>
                    <Button w="10rem" backgroundColor="black" color="white" _hover={{opacity: '70%'}}>
                    { buttonText && buttonText}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ImageWithText
