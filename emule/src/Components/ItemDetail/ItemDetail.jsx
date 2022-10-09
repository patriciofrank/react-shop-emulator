import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail=({item})=>{
    return(
        
        <div>
            <img style={{width:"20rem"}} src={item.pict} alt="Product pict" />
            <h1>Categoria: {item.category}</h1>
            <p>Descripcion{item.desc}</p>
            <p>Precio: {item.price}</p>
            <ItemCount/>
        </div>
    )
}