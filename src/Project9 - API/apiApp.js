import React from "react";
import OneMemeApi from "./oneMemeApi";
import WindowTracker from "./windowTracker";

export default function ApiApp() {

    const [show, setShow] = React.useState(true)


    function toggle() {
        setShow(prevVal => !prevVal)
    }


    return (
        <div className={"container"}>

            {show &&
                <WindowTracker />
            }

            <button onClick={toggle} className={"btn btn-danger m-3"}>
                Press me for window width
            </button>

            <OneMemeApi />
        </div>

    )
}