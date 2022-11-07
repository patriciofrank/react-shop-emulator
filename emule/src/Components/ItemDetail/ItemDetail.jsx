import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./ItemDetail.css";
export const ItemDetail = ({ item }) => {
  const { addProduct } = useContext(CartContext);
  const stockDisponible = item.stock;

  const agregar = (cantidad) => {
    // add Product and quantity
    addProduct(item, cantidad);
  };
  return (
    <div className="itemDetail">
      <img style={{ width: "20rem" }} src={item.pict} alt="Product pict" />
      <h1>Categoria: {item.category}</h1>
      <p>Descripcion{item.desc}</p>
      <p>Precio: {item.price}</p>
      {stockDisponible ? (
        <ItemCount stock={stockDisponible} initial={1} onAdd={agregar} />
      ) : (
        "No hay stock del producto"
      )}
    </div>
  );
};
