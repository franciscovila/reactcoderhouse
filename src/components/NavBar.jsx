import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <header style= {styles.container}>
            <h1> Muebleria Giglio </h1>
            <nav>
                <a style={styles.links} href="">Donde encontrarnos</a>
                <a style={styles.links} href="">Metodos de pago</a>
                <a style={styles.links} href="">Mas info</a>
                <CartWidget />
            </nav>
            </header>
        </>    
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgray',


},
    links: {
        padding: 10,
}
}



export default NavBar;
