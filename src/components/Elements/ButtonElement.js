import Button from "react-bootstrap/Button";

const ButtonElement = (props)=>{
    return <>
        <Button variant={props.color} onClick={props.addToCart}>{props.label}</Button>
    </>;
}

export default ButtonElement;