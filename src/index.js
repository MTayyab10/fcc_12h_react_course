import React from "react"
import ReactDOM from "react-dom/client"
import MemeApp from "./Project5- MemeGen/memeApp";
import App from "./Project4 - Travel Journal/travelApp";
import MyApp from "./Project1 - React FunFacts/factApp";
import FactApp from "./Project1 - React FunFacts/factApp";
import BusnsApp from "./Project2 - Busns Cards/BusnsApp";
import AirBnbApp from "./Project3 - AirBnb/AirBnbApp";
import TravelApp from "./Project4 - Travel Journal/travelApp";
import BoxApp from "./Project6 - Boxes Challanges/boxApp";
import Joke from "./Project7 - Condition Rendering/joke";
import JokeApp from "./Project7 - Condition Rendering/jokeApp";
import UnreadMsg from "./Project7 - Condition Rendering/unreadMsgChallenge";
import FormApp from "./Project8 - Forms/formsApp";
import OneMemeApi from "./Project9 - API/oneMemeApi";
import UseEffectExplained from "./Project9 - API/useEffectExplained";
import WindowTracker from "./Project9 - API/windowTracker";
import ApiApp from "./Project9 - API/apiApp";
import CategoryApi from "./Project9 - API/fetchProductApiData";
import ProductCard from "./Project9 - API/productCard";
import FetchProductApiData from "./Project9 - API/fetchProductApiData";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(

    <React.StrictMode>
        {/*<FactApp />*/}
        {/*<BusnsApp/>*/}
        {/*<AirBnbApp/>*/}
        {/*<TravelApp />*/}
        {/*<MemeApp />*/}
        {/*<BoxApp />*/}
        {/*<UnreadMsg />*/}
        {/*<JokeApp />*/}
        {/*<FormApp />*/}
        {/*<ApiApp />*/}
        <FetchProductApiData />
        {/*<ProductCard />*/}
        {/*<UseEffectExplained />*/}
    </React.StrictMode>
)