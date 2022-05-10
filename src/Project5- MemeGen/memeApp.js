import Header from "./header";
import Meme from "./meme";
import React from "react";
import StateExplained from "./stateExplained";
import MemeDataFromAPI from "./memeDataFromApi";

export default function MemeApp() {

    const [userName, setUserName] = React.useState('tayyab')

    function changeName() {
        setUserName("Liu-XiangQian")
    }

    return (
        <div>
            {/*<Header userName={userName}*/}
            {/*        changeName={changeName} />*/}

            {/*<Meme userName={userName}*/}
            {/*changeName={changeName} />*/}

            <MemeDataFromAPI />

            {/*<StateExplained />*/}
        </div>

    )
}