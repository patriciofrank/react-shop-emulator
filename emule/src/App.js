import { NavBar } from './Components/NavBar/NavBar';
import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartContainer} from './Components/CartContainer/CartContainer'

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Emule Shop"/>}/>
          <Route path='/category/:Id' element={<ItemListContainer/>}/>
          <Route path='/item/:Id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
