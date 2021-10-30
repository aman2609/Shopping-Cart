import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCreator } from "../redux/action";
import "./preview.css";
let Preview=()=>{
    let dispatch=useDispatch();
    let {id}=useParams();
    // console.log(id);
    let state=useSelector((state)=>state);
    let reqObject=state[id];
    // console.log(reqObject);
    return <>
        <div className="preview-container">
            <div className="preview-img-container">
                <img alt="product pic" src={reqObject.image}/>
            </div>
            <div className="preview-listing">
                <h2>{reqObject.name}</h2>
                {/* 
                    
                    */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus, velit maxime quae sint vero molestiae blanditiis nulla nobis neque enim voluptatum rem vitae a quos corporis totam adipisci quas.
                Cum omnis fugit cupiditate ducimus sunt, architecto ut totam nam laborum provident itaque quo eveniet quas qui earum porro sit libero reprehenderit excepturi repellat magni molestias sequi voluptates incidunt! Quis?
                Quam expedita, possimus quos mollitia eaque quas dolorum maxime excepturi nihil similique tenetur quo ut perferendis dolores labore eum atque cumque laudantium ea accusantium iste! Sequi voluptas numquam tempora aspernatur!</p>
                <button onClick={()=>{
                    dispatch(addCreator(reqObject.id));
                    alert("ADDED TO CART SUCESSFULLY");
                }}>Add To Cart</button>
            </div>
        </div>
    </>
}
export default Preview;