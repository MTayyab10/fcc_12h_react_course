import React from "react";
import axios from "axios";
import ProductCard from "./productCard";

export default function FetchProductApiData() {

    const [product, setProduct] = React.useState([])

    React.useEffect(() => {

        fetch('http://127.0.0.1:8000/api_data/viewset/product/')
            .then(res => res.json())
            .then(data => setProduct(data))

        // axios.get('http://127.0.0.1:8000/api_data/viewset/product/')
        //     .then(res => setProduct(res.data))
        //     .catch(err => console.log(err))

    }, [])

    // fetching data YT LinK: youtube.com/watch?v=bYFYF2GnMy8

    const prod = product.map((val) =>
        <ProductCard
            key={val.id}
            val={val}
        />
    )

    return (
        <div>
            <h3 className={"text-center"}>
                Total Products {product.length}
            </h3>
            {prod}
        </div>

    )

}