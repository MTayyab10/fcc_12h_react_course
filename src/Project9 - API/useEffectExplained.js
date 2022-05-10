import React from 'react'


export default function UseEffectExplained() {

    const [count, setCount] = React.useState(0);

    function counter() {
        setCount(prevVal => prevVal + 1)
    }

    console.log("Component Rendered")

    React.useEffect(() => {

        console.log(`You have hit ${count} times`)
        document.title = `You have hit ${count} times`

    }, [count]) // it's mean this will only for once
    // we can decide how many times it should be run or not


    return (
        <div>
            <h3>{count}</h3>
            <button onClick={counter}>Add 1</button>
        </div>
    )

}