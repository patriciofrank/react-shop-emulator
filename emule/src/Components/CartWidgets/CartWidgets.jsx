import "./CartWidgets.css"
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexto/CartContexto"

export const CartWidgets=()=>{
    const {getTotalProductos}=useContext(CartContext)
    return(
    <div className='cart'>
        <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{getTotalProductos}</span>
        </Link>
    </div>
   )
}

