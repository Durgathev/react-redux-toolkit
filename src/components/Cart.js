import CardElement from "./Elements/CardElement";
import { useSelector } from "react-redux";
const Cart = ()=>{

    const cartProduct = useSelector(state=>state.cart);
    const displayCartProduct = cartProduct.map((product)=> <CardElement color="danger"  key={product.id} product={product} label="Remove Item"></CardElement>)
    return <>{displayCartProduct}</>
}

export default Cart;