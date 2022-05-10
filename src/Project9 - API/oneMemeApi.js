import React from "react"

export default function OneMemeApi(props) {

    const [data, setData] = React.useState({});

    const [count, setCount] = React.useState(4)

    // fetch('https://catfact.ninja/fact/') online api

    React.useEffect(() => {

        fetch( `http://127.0.0.1:8000/api_data/viewset/product/${count}`)
            .then(response => response.json())
            .then(data => setData(data))

        console.log(data)
        console.log("Total products are: ", data.length)

    }, [count])


    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Get Next Product</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}