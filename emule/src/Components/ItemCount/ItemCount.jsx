import React,{useState} from "react";
import { Link } from "react-router-dom";

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
  
   console.log(contador)
    // Change boton after add product
    const BotonCart=()=>{
    
        return(<div>
            {
                finalizar ?
            <>
            <p>Stock de productos: {stock}</p>
            <p>Conteo={contador}</p>
            <button onClick={sumar}>+</button>
            <button disabled={stock===0} onClick={()=>onAdd(contador,setFinalizar(false))}>Agregar</button>
            <button onClick={quitar}>-</button>
            </>
            :
            <>
            <Link to="/cart"><button >Ir a Carrito</button></Link>
            <Link to="/"><button>Constinuar Comprando</button></Link>      
            </>
            }
            
         </div>)
    
     
     
    }
  
    return(
    <BotonCart/>
     );
}
