import {itemsArray} from "../ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer=()=>{
    const [ item , setItem ] = useState ({})
    const product = useParams().Id
    console.log(product)

    const getItem=()=>{
        return new Promise((resolve, reject) => {
            resolve(itemsArray)
        })
    }
    useEffect(()=>{
       
        getItem()
        .then(result=>{
           const itemFilter=result.filter(elem=>elem.id===parseInt(product));
           setItem(itemFilter[0]) 
        })
        .catch((error)=> console.log('Error',error))
        
      
    },[product])
    
    console.log(item)
   return(
    <div className="item-detail-container">
        <p style={{width:"100%",color:"black"}}>item detail Container</p>
        <ItemDetail item={item}/>
    </div>
   )
}