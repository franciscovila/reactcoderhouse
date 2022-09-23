import React from "react";


export const Item = ({ product }) => {

    return (
<div style={styles.container}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.Infocontainer}>
        <h1>{product.title}</h1>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Infocontainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
};