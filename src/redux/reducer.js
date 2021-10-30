import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant"

let initialState=[{
        id:0,
        name:"Phone",
        image:"https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg",
        price:18000,
        quantity:0,
    },
    {
        id:1,
        name:"Audi",
        image:"https://images.financialexpress.com/2020/04/Audi-Q8-1.jpg?w=1200&h=800&imflag=true",
        price:180000000,
        quantity:0,
    },{
        id:2,
        name:"Recliner",
        image:"https://ik.imagekit.io/durian1985/durian/durian_in/Product/1420201109100419img.jpg?tr=w-453,q-100,f-auto",
        price:22000,
        quantity:0,
    }
]
let reducer=(state=initialState,action)=>{
    let cp=[];
    let id=-1;
    switch(action.type){
        case ADD_TO_CART:
            cp=state.map((el)=>el);
            id=action.payload;
            cp[id].quantity=cp[id].quantity+1;
            return cp;
        case REMOVE_FROM_CART:
            cp=state.map((el)=>el);
            id=action.payload;
            if(cp[id].quantity>0)cp[id].quantity=cp[id].quantity-1;
            return cp;
        default:
            return state;
    }
}
export default reducer;