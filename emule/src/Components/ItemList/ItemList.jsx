import {Item} from "../Item/Item.jsx"

export const Itemlist=({items})=>{

    return(
   <>
   {
        items.map(element=>{
            return ( 
                <Item key={element.id} id={element.id} price={element.price } desc={element.desc } title={element.category } img={element.pict}/>
            )
        })
    }
   </>
)
}