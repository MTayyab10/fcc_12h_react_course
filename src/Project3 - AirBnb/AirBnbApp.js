import data from "./data";
import Card from "./card";
import Home from "./home";
import Experience from "./experience";


export default function AirBnbApp() {

    const cardData = data.map((item) =>

        <Card
            key={item.id} // each shld have unique key/id
            // rating={val.rating}
            // img={val.img}
            // description={val.description}
            // price={val.price}
            // sold_out={val.sold_out}
            item={item} // instead of writing all just add key & item
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
