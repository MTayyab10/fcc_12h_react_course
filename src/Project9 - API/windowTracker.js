import React from "react";

export default function WindowTracker() {

    const width = window.innerWidth

    const [windowWidth, setWindowWidth] = React.useState(width)

    React.useEffect(() => {

        function windowWatch() {
            // console.log('resized', window.innerWidth)
            setWindowWidth(window.innerWidth)
        }  // for cleanup, function should be outside from eventListener

        window.addEventListener('resize', windowWatch)
        // cleanup function
        return function () {
            window.removeEventListener('resize', windowWatch)
        }

    }, [])


    return (
        <div>

            <h3>Window Width is: {windowWidth}</h3>
        </div>
    )

}