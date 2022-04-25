import data from "./data";
import Card from "./card";
import Home from "./home";
import Experience from "./experience";


export default function App() {

    const cardData = data.map((val) =>

        <Card
            rating={val.rating}
            img={val.img}
            description={val.description}
            price={val.price}
        />
    )

    return (
        <div>
            <Home />
            <Experience />
            {cardData}
        </div>
    )
}
