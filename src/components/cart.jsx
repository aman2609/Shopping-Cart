import { useDispatch, useSelector } from "react-redux";
import { removeCreator } from "../redux/action";
import { useHistory } from "react-router";
let Cart=()=>{
    let history=useHistory();
    let dispatch=useDispatch();
    let state=useSelector((state)=>state)
    // console.log(state);
    let totalAmount=0;
    let filterArr=state.filter((el)=>el.quantity>0)
    return <>
        {filterArr.length>0?<table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {filterArr.map((el,index)=>{
                    let currAmt=el.price*el.quantity;
                    totalAmount+=currAmt
                    return(
                        <tr key={index+1}>
                            <th scope="row">{index+1}</th>
                            <td>{el.name}</td>
                            <td>Rs. {el.price}</td>
                            <td>{el.quantity}</td>
                            <td>Rs. {currAmt}</td>
                            <td><button onClick={()=>{dispatch(removeCreator(el.id));alert("REMOVED FROM CART SUCCESSFULLY")}}>Remove</button></td>
                        </tr>
                    )
                })}
                
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{totalAmount}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>:
        (
            alert("NO ITEM IN THE CART"),
            history.push("")
        )}
        
  </>
}
export default Cart;