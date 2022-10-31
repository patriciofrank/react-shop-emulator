import "./CartWidgets.css"
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartWidgets=()=>{
    const {getProductosTotal}=useContext(CartContext)
    return(
    <div className='cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{getProductosTotal()}</span>
    </div>
   )
}

