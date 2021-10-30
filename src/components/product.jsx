import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addCreator } from "../redux/action";
import "./product.css";
let Product=(props)=>{
    let dispatch=useDispatch();
    let history=useHistory();
    return <div className="product-card">
        <div onClick={()=>{
            history.push(`./preview/${props.data.id}`);
        }} className="product-image">
            <img src={props.data.image} alt=""/>
        </div>
        <div className="product-btn">
            <button onClick={()=>{
                dispatch(addCreator(props.data.id));
                alert("ADDED TO CART SUCESSFULLY");
            }}>Add To Cart</button>
        </div>
        
    </div>
}
export default Product;