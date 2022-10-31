import React,{useState} from "react";


export const ItemCount=({stock, onAdd, initial})=>{
    const [contador,setContador]=useState(initial);
    
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
            <p>Conteo={contador}</p>
            <button onClick={sumar}>+</button>
            <button disabled={stock===0} onClick={()=>onAdd(contador)}>Agregar</button>
            <button onClick={quitar}>-</button>
         </div>)
    
     
     
    }
  
    return(
    <BotonCart/>
     );
}
