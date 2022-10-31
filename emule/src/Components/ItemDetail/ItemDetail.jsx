import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const ItemDetail=({item})=>{
    const{addProduct}=useContext(CartContext);
    const agregar=(cantidad)=>{
        // add Product and quantity
            addProduct(item,cantidad)       
        };
    
    return(
        
        <div>
            <img style={{width:"20rem"}} src={item.pict} alt="Product pict" />
            <h1>Categoria: {item.category}</h1>
            <p>Descripcion{item.desc}</p>
            <p>Precio: {item.price}</p>
            <p>Stock de productos: {item.stock}</p>
            <ItemCount  stock={item.stock} initial={0}  onAdd={agregar} />
        </div>
    )
}