import { useEffect } from "react";
import Card from "./Elements/CardElement";
import { getproducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import errorCodes from "../util/errorcodes";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  if (status === errorCodes.LOADING) {
    return (
      <Alert key="primary" variant="primary">
        Loading....
      </Alert>
    );
  }

  if (status === errorCodes.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong, Try again later.
      </Alert>
    );
  }

  const cards = products.map((product) => {
    return (
      <Card
        key={product.id}
        product={product}
        label="Add To Cart"
        color="primary"
        chose="A"
      />
    );
  });

  return (
    <>
      <h1 className="my-4 text-center">Products Dashboard</h1>

      <div className="row">{cards}</div>
      {/* <div>{JSON.stringify(products)}</div> */}
    </>
  );
};

export default Products;
