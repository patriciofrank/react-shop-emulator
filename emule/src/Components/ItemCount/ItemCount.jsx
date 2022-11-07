import React,{useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
export const ItemCount=({stock, onAdd, initial})=>{
    const [contador,setContador]=useState(initial);
    const [finalizar, setFinalizar]=useState(true)
    const sumar=()=>{
        if (contador < stock ){
            setContador(contador+1)
        };
    };
    const quitar=()=>{
        if(contador>0){
        setContador(contador-1)
        }
    };
    // Alert confirmation
    const alertAddProduct=()=>(
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto se agrego al carrito!',
            showConfirmButton: false,
            timer: 2000
          })
    );
    // Change boton after add product
    console.log(stock)
    const BotonCart=()=>{
    
        return(<div>
            {
                finalizar ?
            <>
            <p>Stock de productos: {stock}</p>
            <p>Conteo={contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={()=>onAdd(contador,setFinalizar(false),alertAddProduct())}>Agregar</button>
            <button onClick={quitar}>-</button>
            </>
            :
            <>
            <Link to="/cart"><button >Ir a Carrito</button></Link>
            <Link to="/"><button>Continuar Comprando</button></Link>      
            </>
            }
         </div>)
    }
  
    return(
    <BotonCart/>
     );
}
