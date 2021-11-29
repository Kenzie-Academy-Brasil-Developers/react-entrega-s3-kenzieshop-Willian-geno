import { Conteiner } from "./styled";
import Cart from "./conteiner/pages/cart";
import Products from "./conteiner/pages/products";
import {Route, Routes} from "react-router-dom"

function App() {

   
  return <Conteiner>
    <Routes>
      <Route path = "/" element = {<Products />} />
      <Route path = "/card" element = {<Cart/>} />      
    </Routes>
  </Conteiner>
}

export default App;
