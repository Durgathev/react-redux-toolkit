import { useEffect } from "react";
import { useState } from "react";
import Card from "./Elements/CardElement";



const Products = ()=>{

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=> res.json()).then((json)=>{setProducts(json)})
    })

    const cards = products.map((product)=>{
       return <Card key={product.id}  product={product} label="Add To Cart" color="primary"/>
    });

    return <>
     <h1 className="my-4 text-center">Products Dashboard</h1>
     <div className="row">
        {
            cards
        }
     </div>
     {/* <div>{JSON.stringify(products)}</div> */}
    </>;

}

export default Products;