import { Link } from "react-router-dom"

export const Item=({desc,price,title,img,id})=>{
    return(
        <div style={{border:"2px solid black", margin:"1rem"}}>
            <h1>{title}</h1>
            <img style={{width:"20rem"}} src={img} alt="Product pict" />
            <p>Descripcion{desc}</p>
            <p>Precio:{price}</p>
            <Link to={`/item/${id}`}><button>Detalles</button></Link>
        </div>
    )

}