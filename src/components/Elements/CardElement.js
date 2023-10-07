
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import ButtonElement from "./ButtonElement";

const CardElement = (props) => {
  const dispatch = useDispatch();

  const addToCart =(product)=>{
    dispatch(add(product));
  }

  return (
    <>
      <div className="col-md-3" style={{marginBottom:'10px'}}>
        <Card style={{ width: "18rem" }} key={props.product.id} className="h-100">
            <div className="text-center">
                <Card.Img variant="top" src={props.product.image} style={{width:'100px', height:'130px'}}/>
            </div>
          
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>
              INR. {props.product.price}
            </Card.Text>
            
          </Card.Body>
          <Card.Footer style={{backgroud:'white'}}>
            <ButtonElement color={props.color} addToCart={()=>addToCart(props.product)} label={props.label}></ButtonElement>
          
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default CardElement;
