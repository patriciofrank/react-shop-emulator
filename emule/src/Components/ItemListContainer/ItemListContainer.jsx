import { Itemlist} from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore"
import { db } from "../../utils/firebase";

import Tablet1 from "../../assets/Tablet1 slate7.jpg"
import Tablet2 from "../../assets/Tablet2 touchpad.webp"
import Tablet3 from "../../assets/Tablet3 elite x 2.webp"
import Tablet4 from "../../assets/Tablet4 Pro tablet 608.jpg"
import Netbook1 from "../../assets/Netbook1 mini 110.jpg"
import Netbook2 from "../../assets/Netbook2 mini220.jpg"
import Netbook3 from "../../assets/Netbook3.jpg"
import Netbook4 from "../../assets/Netbook4 Chromebook.jpg"
import Notebook1 from "../../assets/Notebook1 hp-15ef2126.jpg"
import Notebook2 from "../../assets/Notebook2 HP-14 240.jpg"
import Notebook3 from "../../assets/Notebook3 pavillon x 360.jpg"
import Notebook4 from "../../assets/Notebook4 hp 250.jpg"
import Notebook5 from "../../assets/Notebook5 Spectre X360.jpg"

export const itemsArray =[
    {id:1, category:"Tablet",brand:"#",desc:"XXXXXX",price:20000,pict:Tablet1  ,stock:10},
    {id:2, category:"Notebook",brand:"#",desc:"XXXXXX",price:120000,pict:Notebook1  ,stock:10},
    {id:3, category:"Tablet",brand:"#",desc:"XXXXXX",price:220000,pict:Tablet2  ,stock:10},
    {id:4, category:"Netbook",brand:"#",desc:"XXXXXX",price:90000,pict:Netbook4  ,stock:10},
    {id:5, category:"Netbook",brand:"#",desc:"XXXXXX",price:90000,pict:Netbook3  ,stock:10},
    {id:6, category:"Netbook",brand:"#",desc:"XXXXXX",price:90000,pict:Netbook2  ,stock:10},
    {id:7, category:"Notebook",brand:"#",desc:"XXXXXX",price:90000,pict:Notebook2  ,stock:10},
    {id:8, category:"Notebook",brand:"#",desc:"XXXXXX",price:90000,pict:Notebook3  ,stock:10},
    {id:9, category:"Notebook",brand:"#",desc:"XXXXXX",price:90000,pict: Notebook4 ,stock:10},
    {id:10, category:"Tablet",brand:"#",desc:"XXXXXX",price:90000,pict:Tablet3 ,stock:10 },
    {id:11, category:"Notebook",brand:"#",desc:"XXXXXX",price:90000,pict: Notebook5 ,stock:10},
    {id:12, category:"Netbook",brand:"#",desc:"XXXXXX",price:90000,pict: Netbook1  ,stock:10},
    {id:13, category:"Tablet",brand:"#",desc:"XXXXXX",price:90000,pict: Tablet4 ,stock:10},
]; 


export const ItemListContainer=({greeting})=>{
    const [ item , setItem ] = useState ([])
    const category = useParams().Id
    console.log(category)
   
    // Promise render products
    const ObtenerItems=()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(itemsArray) 
            }, 2000);
        })
    }
    useEffect(()=>{
       
        ObtenerItems()
        .then(result=>{
            if(category){
                const productsfilter=result.filter(elem=>elem.category===category);
                setItem(productsfilter)
            }else{
                setItem(result)
            }
        })
        .catch((error)=> console.log('Error',error))
        
      
    },[category])
    
    return(
       <div className="productContainer">
        {greeting}
        <Itemlist items={item}/>
       </div>
    )
}