import React from "react"
import boxes from "./boxesData";
import "../styles.css"
import Box from "./box";

export default function BoxApp() {

    const [boxElements, setBoxElements] = React.useState(boxes);

    function changeBoxValue(id) {

        setBoxElements(prevVal => {

            return prevVal.map((box) => {
                return box.id === id ? {...box, on: !box.on} : box;
            })

            // const setBoxVal = []; it's by for loop
            // for (let i = 0; i < prevVal.length; i++) {
            //     const currentVal = prevVal[i]
            //     if (currentVal.id === id) {
            //         const updatedVal = {
            //             ...currentVal,
            //             on: !currentVal.on
            //         }
            //         setBoxVal.push(updatedVal)
            //     } else {
            //         setBoxVal.push(currentVal)
            //     }
            // }
            // return setBoxVal;
        })
        console.log("Box color has changed " +
            "which Id is", id )
    }

    const boxesMap = boxElements.map(box => (
           <Box
               key={box.id}
               // id={box.id}
               box={box}
               handleClick={() => changeBoxValue(box.id)}
           />
        )
    )

    return (
        <div className={"container text-center"}>

            <h1>Boxes will go here</h1>

            <div>
                {boxesMap}
            </div>

            {/*<div className={"row"}>*/}

            {/*    <div className={"text-light "}>*/}

            {/*        /!*<h3 onClick={changeBoxValue} >*!/*/}
                       {/*// className={boxValue.on ? "bg-primary" : "bg-danger"}>*/}
            {/*           /!*{boxValue.id} {boxValue.someRandom}*!/*/}
            {/*            {boxesMap}*/}
            {/*        /!*</h3>*!/*/}

            {/*    </div>*/}

            {/*</div>*/}

        </div>
    )
}

