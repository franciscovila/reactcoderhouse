import React from "react";
import ItemCount from './ItemCount';




const ItemDetail = ({ producto }) => {
  const onAdd = () => {}
  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt={producto.title} />
      <div style={styles.Infocontainer}>
        <h1>{producto.title}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
        <ItemCount onAdd={onAdd} stock={10}/>
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
export default ItemDetail;