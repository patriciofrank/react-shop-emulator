import {Item} from "../Item/Item.jsx"

export const Itemlist=({items})=>{
return(
   <>
   {
        items.map(element=>{
            return ( 
                <Item id={element.id} price={element.price } desc={element.desc } title={element.category } img={element.pict}/>
            )
        })
    }
   </>
)
}