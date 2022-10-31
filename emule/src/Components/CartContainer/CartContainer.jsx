import { useContext } from "react"
import  {CartContext} from "../../context/CartContext"

export const CartContainer = () => {
    const value= useContext(CartContext);
    const {productos,getTotalPrice,getProductosTotal,deleteItem}=value;
    console.log(productos);
    
    return(
    <div>
        <p>Carrito</p>
        <div style={{width:"30rem"}}>
         {
             productos.map((product)=>(
                 <div style={{display:"flex",maxwidth:"768px"}} >
                    <img style={{width:"10rem"}} src={product.pict} alt="imagen de producto" />
                     <h3>{product.category}</h3>
                     <p>precio unitario: {product.price}</p>
                     <p>cantidad: {product.cantidad}</p>
                     <p>precio por cantidad: {product.precioCantidad}</p>
                     <button onClick={()=> deleteItem(product.id)}>Eliminar</button>
                 </div>
             )
             )
         }
         </div>
         <h4>Precio Total: {getTotalPrice()}</h4>
         <h4>Total de productos : {getProductosTotal()}</h4>
     </div>
    )
} 