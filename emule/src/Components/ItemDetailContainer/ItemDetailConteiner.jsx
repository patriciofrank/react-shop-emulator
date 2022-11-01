import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../utils/firebase";

export const ItemDetailContainer=()=>{
    const [ item , setItem ] = useState ({})
    const {id} = useParams()

    useEffect(()=>{
        const getItem = async ()=>{
            //create ref
            const queryRef= doc(db,"productos",id);
             //do the query
             const resolve = await getDoc(queryRef);
             const newDoc = {
                ...resolve.data(),
                id:resolve.id
             }
            setItem(newDoc)   
        }    
        getItem();
    },[id])
     
   return(
    <div className="item-detail-container">
        <p style={{width:"100%",color:"black"}}>item detail Container</p>
        <ItemDetail item={item}/>
        
    </div>
   )
}