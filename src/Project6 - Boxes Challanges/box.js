import React from "react";

export default function Box(props) {

    // console.log(props.box.on)

    // const [boxOn, setBoxOn] = React.useState(props.box.on)
    //
    // function changeBoxValue() {
    //     setBoxOn(prevVal =>
    //         !prevVal
    //     )
    //     console.log("Box clr changes", props.box.on)
    // }
    //

    return (

        <div className={props.box.on ? "bg-primary box" :
            "bg-danger box"}>

            <div onClick={props.handleClick}
                 className={"btn text-center pt-4 text-white"}>
                {props.box.id} click me
            </div>

        </div>
    )

}