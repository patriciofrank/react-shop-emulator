import { useContext } from "react"
import  {CartContext} from "../../contexto/CartContexto"

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
                 <div>
                     <h3>{product.category}</h3>
                     <p>precio unitario: {product.price}</p>
                     <p>cantidad: {product.cantidad}</p>
                     <p>precio por cantidad: {product.preciocantidad}</p>
                     <button onClick={()=> deleteItem(product.id)}>Eliminar</button>
                 </div>
             )
             )
         }
         <h4>Precio Total: {getTotalPrice}</h4>
         <h4>Total de productos : {getProductosTotal}</h4>
         </div>
     </div>
    )
} 