import React from "react"
import Joke from "./joke";
import data from "./jokesData"

export default function JokeApp() {

    const [isShown, setIsShown] = React.useState(data);

    function changeShownVal(id) {

        setIsShown(prevVal => {

            return prevVal.map(val => {
                return val.id === id ? {
                    ...val,
                    shown: !val.shown
                } : val
            })
        })
        console.log("State has been changed.")
    }

    const jokes = isShown.map(val =>

        <Joke
            key={val.id}
            val={val}
            changeVal={() => changeShownVal(val.id)}
        />
    )


    return (

        <div className={"container text-center"}>
            <h1>Here jokes all goes</h1>
            {jokes}
        </div>

    )
}