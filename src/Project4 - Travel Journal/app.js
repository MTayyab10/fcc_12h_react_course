import data from "./data";
import Card from "./card";
import Header from "./header";

export default function App() {

    const cardData = data.map((item) =>

        <Card
            key={item.id}

            item={item}
        />
    )

    return (
        <div>
            <Header />
            {cardData}
        </div>
    )
}
