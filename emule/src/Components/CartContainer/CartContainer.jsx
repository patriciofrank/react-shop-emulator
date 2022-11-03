import { useContext } from "react"
import  {CartContext} from "../../context/CartContext"
import "./CartContainer.css"
export const CartContainer = () => {
    const value= useContext(CartContext);
    const {productos,getTotalPrice,getProductosTotal,deleteItem}=value;
    console.log(productos);
    const carritoVacio = productos.length 
    return(
    <div>
        <div className="cartContainer">
         {
            carritoVacio ? 
             productos.map((product)=>(
                 <div className="cartItem" >
                    <img style={{width:"10rem"}} src={product.pict} alt="imagen de producto" />
                     <h3>{product.category}</h3>
                     <p>precio unitario: {product.price}</p>
                     <p>cantidad: {product.cantidad}</p>
                     <p>precio por cantidad: {product.precioCantidad}</p>
                     <button onClick={()=> deleteItem(product.id)}>Eliminar</button>
                 </div>
             )
             )
             :
            <>
            <h4 style={{textaling:"center",width:"auto"}}>No hay productos en el carrito</h4>
            </>
         }
         </div>
         { carritoVacio ?
         <>
         <h4>Precio Total: {getTotalPrice()}</h4>
         <h4>Total de productos : {getProductosTotal()}</h4>
         <button className="btnF">Finalizar</button>
         </>
         :
         <p>Agregue algunos productos al carrito</p>
        }
     </div>
    )
} 