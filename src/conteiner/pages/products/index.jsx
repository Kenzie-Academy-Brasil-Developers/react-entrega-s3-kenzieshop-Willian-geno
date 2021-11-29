import { Conteiner, ProductsConteiner, DiscriptionConteiner, Diplay} from "./styled"
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/modules/card/actions";
import { products } from "../../../products";
import { Link } from "react-router-dom";
import {BsFillCartFill} from "react-icons/bs"


const Products = () => {
    
    const dispatch = useDispatch();  
    const handleClick = (product) =>{
        dispatch(addProduct(product));

    }

    return<Diplay>
        <div className = "title">
            <div>
                <h2>KenzieShop</h2>
                <Link to = "/card" ><BsFillCartFill/></Link>
            </div>
             <h3>Produtos:</h3>   
        </div>
            <Conteiner>
        {products.map((item,index) => (
            <ProductsConteiner kay = {index} >
                <img src={item.image}/>
                <DiscriptionConteiner>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price.toFixed(2)}</p>
                    </div>
                    <button onClick = {() => handleClick(item)} >Add Produto</button>
                </DiscriptionConteiner>
            </ProductsConteiner>
        ))}
    </Conteiner>
    </Diplay>
}


export default Products;