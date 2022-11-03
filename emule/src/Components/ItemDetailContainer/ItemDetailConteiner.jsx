import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../utils/firebase";
import { LoadingComp } from "../LoadingComp/LoadingComp";


export const ItemDetailContainer=()=>{
    const [ itemProduct , setItemProduct ] = useState ({})
    const [loading, setLoading]=useState(true)
    const {Id} = useParams()

    useEffect(()=>{
        const getItem = async ()=>{
            //create ref
            const queryRef= doc(db,"productos",Id);
             //do the query
             const resolve = await getDoc(queryRef);
             const newDoc = {
                ...resolve.data(),
                id:resolve.id
             }
            setItemProduct(newDoc) 
            setLoading(false)  
        }    
        getItem();
    },[Id])
     
   return(
    <div className="item-detail-container">
        {
            loading ? 
            <LoadingComp/>
            :
            <ItemDetail item={itemProduct}/>
        }
       
    </div>
   )
}