import Product from "./product";
import "./home.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
let Home=()=>{
    let state=useSelector((state)=>state);
    console.log(state);
    let history=useHistory();
    return <>
        <div className="product-container">
            {state.map((el,index)=>(
                <Product key={index} data={el}/>
            ))}
            
        </div>
        <button onClick={()=>{
            history.push("/cart");
        }} className="shopping-cart-home">
            <span class="material-icons">shopping_cart</span>
        </button>
    </>
}
export default Home;