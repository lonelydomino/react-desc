import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import './categories.css'

// const Categories = () => {
//     return (
//         <Box backgroundColor="gray.300">
//             <Flex>
//             <Center w="100%" p="1rem" >
//                 <Heading >Categories</Heading>
//             </Center>
//             <Box position="relative" w="100%">
//                 <Image alignItems="center" boxSize="200px" borderRadius="full" src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg"/>
//                 <Text bottom="15%" w="100%" color="white" position="absolute">Pants</Text>
//             </Box>
//             <Box position="relative" w="100%">
//             </Box>

//             </Flex>
            
//         </Box>
//     )
// }

const Categories = () => {

    return (
        <>
            <Box w="100%" p="1rem" backgroundColor="gray.300">
                <Heading textAlign="center" justifyContent="center" w="100%">Categories</Heading>
            </Box>
        <div className="outer">
            <div className="content"><p className="text">Shirts</p><img className="category-image" alt="shirts" src="https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_960_720.jpg"/></div>
            <div className="content"><p className="text">Hats</p><img className="category-image" alt="hats" src="https://cdn.pixabay.com/photo/2019/09/23/01/10/hat-4497323_960_720.jpg"/></div>
            <div className="content"><p className="text">Shoes</p><img className="category-image" alt="shoes" src="https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg"/></div>
            <div className="content"><p className="text">Skirts</p><img className="category-image" alt="skirts" src="https://cdn.pixabay.com/photo/2017/06/05/09/34/skirt-2373506_960_720.jpg"/></div>
            <div className="content"><p className="text">Pants</p><img className="category-image" alt="pants" src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_960_720.jpg"/></div>
            <div className="content"><p className="text">Accessories</p><img className="category-image" alt="accessories" src="https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_960_720.jpg"/></div>
            <div className="content"><p className="text">Dresses</p><img className="category-image" alt="dresses" src="https://cdn.pixabay.com/photo/2012/07/29/21/42/dresses-53319_960_720.jpg"/></div>
        </div>
        </>

    )
}

export default Categories
