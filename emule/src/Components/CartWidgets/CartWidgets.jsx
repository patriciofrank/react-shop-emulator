import "./CartWidgets.css"
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CartWidgets=()=>{
   return(
    <div className='cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>0</span>
    </div>
   )
}

