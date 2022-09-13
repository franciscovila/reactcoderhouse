import React from 'react';
import {Button, Image, VStack, Text} from "@chakra-ui/react"

const Item = ({product}) => {
        return(
            <VStack>
            <Text>{product.product}</Text>
            <Image src={product.image} w="150px" />
            <Text>{product.price}</Text>
            <Button>Ver detalle</Button>
            </VStack>
        )
}

export { Item }