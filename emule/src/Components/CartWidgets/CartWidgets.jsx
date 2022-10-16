import "./CartWidgets.css"
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

export const CartWidgets=()=>{
   return(
    <div className='cart'>
        <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>0</span>
        </Link>
    </div>
   )
}

