import React,{useState} from "react";



export const ItemCount=()=>{

    const [contador,setContador]=useState(0);
    const sumar=()=>{
        if (contador<5){
            setContador(contador+1)
        };
    };
    const quitar=()=>{
        if(contador>0){
        setContador(contador-1)
        }
    };
    const borrar=()=>{
        setContador(contador-contador)
    };
    return(
        <div>
        <p>Conteo={contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={quitar}>-</button>
        <button onClick={borrar}>Borrar</button>
     </div>
     );
}