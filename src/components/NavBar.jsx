import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Grid,
    VStack,
    Container
} from '@chakra-ui/react'
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <VStack >
        <Grid>
        <Container bg='lightgrey'>
        <Heading>Vison Metal</Heading>
    <Breadcrumb spacing='8px' separator='>' alignItems="space-between" >
<BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

    <BreadcrumbItem>
    <BreadcrumbLink href='#'>Sobre Nosotros</BreadcrumbLink>
</BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contacto</BreadcrumbLink>
    </BreadcrumbItem>

    <CartWidget />
</Breadcrumb>
</Container>
</Grid>
        </VStack>    
    )
}


export default NavBar;
