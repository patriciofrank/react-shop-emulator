import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail=({item})=>{
    const [stock, setStock]= useState(0)
    const agregar=(cantidad)=>{
        console.log(cantidad)
        setStock(cantidad)
    };

    return(
        
        <div>
            <img style={{width:"20rem"}} src={item.pict} alt="Product pict" />
            <h1>Categoria: {item.category}</h1>
            <p>Descripcion{item.desc}</p>
            <p>Precio: {item.price}</p>
            <p>Stock de productos: {item.stock-stock}</p>
            <ItemCount  cantidad={stock} stock={item.stock} onAdd={agregar} />
        </div>
    )
}