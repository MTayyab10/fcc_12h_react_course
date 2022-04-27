import firstImg from "../images/Rectangle 77.png"
import secondImg from "../images/Rectangle 84.png"
import thirdImg from "../images/Rectangle 78.png"

const data = [
    {
        id: 1,
        title: "Mountain Fuji",
        img: firstImg,
        location: "Japan",
        date: {
            from: "24 May, 2022",
            to: "26 May, 2022"
        },

        description: "" +
            "Mount Fuji is the tallest mountain in Japan, " +
            "standing at 3,776 meters (12,380 feet)." +
            " Mount Fuji is the single most popular tourist " +
            "site in Japan, for both Japanese and foreign tourists."
    },
    {
        id: 2,
        title: "Sydney Opera House",
        img: secondImg,
        location: "australia",
        date: {
            from: "22 May, 2022",
            to: "02 June, 2022"
        },

        description: "The Sydney Opera House is a" +
            " multi-venue performing arts centre in Sydney." +
            " Located on the banks of the Sydney Harbour, " +
            "it is often regarded as one of the 20th century's" +
            " most famous and distinctive buildings"
    },

    {
        id: 3,
        title: "Geirangerfjord",
        img: thirdImg,
        location: "norway",
        date: {
            from: "22 December, 2022",
            to: "02 Jan, 2023"
        },

        description: "" +
            "The Geiranger Fjord is a fjord in the Sunnmøre" +
            " region of Møre og Romsdal county, Norway. " +
            " It is located entirely in the Stranda Municipality."
    }
]
export default data;