import firstImg from "../images/person.png"
import secondImg from "../images/mountain-bike.png"

const data =  [

    {
        id: 1,
        img: firstImg,
        description: "A very beautiful man",
        price: 200,
        sold_out: true,

        rating: {
            star: 4.5,
            peoples: 6,
        },
    },
    {
        id: 2,
        img: secondImg,
        description: "Bike with dark background",
        price: 400,

        rating: {
            star: 3.5,
            peoples: 8,
        },
    },
    {
        id: 3,
        img: firstImg,
        description: "Hey! I am description",
        price: 500,

        rating: {
            star: 6,
            peoples: 10,
        },
    },
]
export default data;