import React,{useState} from "react";
import { Link } from "react-router-dom";


export const ItemCount=({stock, onAdd, cantidad})=>{
    const [contador,setContador]=useState(0);
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
   
    // Change boton after add product
    const BotonCart=()=>{
        if(cantidad===0){
        return(<div>
        <p>Conteo={contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={()=>onAdd(contador)}>Agregar</button>
        <button onClick={quitar}>-</button>
     </div>)
        }else{
        return(    
        <div>
        <Link to='/cart'><button>Continaur a Carrito</button></Link>
        </div>)
        }
    }
  
    return(
    <BotonCart/>
     );
}