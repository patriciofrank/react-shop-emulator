import { useContext } from "react"
import  {CartContext} from "../../context/CartContext"
import "./CartContainer.css"
import { db } from "../../utils/firebase"
import { collection,addDoc } from "firebase/firestore"
import Swal from "sweetalert2"

export const CartContainer = () => {
    const value= useContext(CartContext);
    const {productos,getTotalPrice,getProductosTotal,deleteItem}=value;
    // console.log(productos);
    const carritoVacio = productos.length ;
    const hoy = new Date().toString();

    const alertaFinal =(a)=>{
        Swal.fire({
            title: 'Su compra fue realizada',
            icon: 'success',
            html:'<b>Numero de Orden:</b>'+ a, 
            showCloseButton:true + refresh(),
            showCancelButton: true,
            focusConfirm: false,
        })
    }

    const finishOrder =(evt)=>{
        evt.preventDefault();
        const compra = {
            comprador:{
                nombre:evt.target[0].value,
                apellido:evt.target[1].value,
                cp:evt.target[2].value,
                direccion:evt.target[3].value,
                mail:evt.target[4].value,
                tel:evt.target[5].value,
            },
            fecha:hoy,
            items: productos,
            total:getTotalPrice(),
        }
        // Ref storage orders
        const ordenCompra =collection(db,"ordenes");
        //add Order
        addDoc(ordenCompra,compra).then((result)=>alertaFinal(result.id)).catch((error)=>console.log(error))
    }
    const refresh = ()=>{
      setTimeout(() => {
        window.location.reload()
      }, 5000);  
    }
   
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
         <form onSubmit={finishOrder}>
            <label>Nombre:</label>
            <input required min="1" type="text" name="name"/>
            <label>Apellido:</label>
            <input required min="1" type="text" name="lastname"/>
            <label>C.P:</label>
            <input required min="2" type="number" name="postalCode"/>
            <label>Direccion:</label>
            <input required min="8" type="text" name="adress"/>
            <label>E-mail:</label>
            <input required min="5" type="email" name="mail"/>
            <label>Telefono:</label>
            <input required min="8" type="tel" name="phoneNumber"/>
            <button type="submit" className="btnF" onClick={()=>(alertaFinal)}>Finalizar</button>
        </form>
        
         </>
         :
         <p>Agregue algunos productos al carrito</p>
        }
     </div>
    )
} 