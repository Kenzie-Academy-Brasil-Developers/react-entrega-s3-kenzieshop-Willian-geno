import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../../store/modules/card/actions";
import { Conteiner, ProductsConteiner, DiscriptionConteiner, Diplay} from "../products/styled"
import { Link } from "react-router-dom";

const Cart = () => {

    const cart = useSelector((state) => state.card);

    
    const dispatch = useDispatch();

    
    const handleClick = (item) => {
        dispatch(removeProduct(item));
    }

    return<Diplay>
        <div className = "title">
            <h2>KenzieShop</h2>
            <h3>Seu Carrinho:</h3>   

        </div>
        <div className = "total">
            Total: {(cart.reduce((acc, cur) => {
                return acc + cur.price
            }, 0)).toFixed(2)}
        </div>
            <Conteiner>
        {cart.map((item,index) => (
            <ProductsConteiner kay = {index} >
                <img src={item.image}/>
                <DiscriptionConteiner>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price.toFixed(2)}</p>
                    </div>
                    <button onClick = {() => handleClick(item)} >Remover Produto</button>
                </DiscriptionConteiner>
            </ProductsConteiner>
        ))}
        </Conteiner>
        <Link to = "/" >voltar a comprar</Link>
    </Diplay>
}

export default Cart