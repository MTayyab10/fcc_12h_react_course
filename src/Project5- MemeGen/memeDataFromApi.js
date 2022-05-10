import React from "react";
import firstImg from "../images/Pic.png"
import memeData from "./memeData";

export default function MemeDataFromAPI() {

    const [inputs, setInputs] = React.useState({
        firstJoke: "",
        secondJoke: "",
        img: {firstImg}

    })

    function handleChange(event) {

        const name = event.target.name
        const value = event.target.value

        setInputs(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const data = memeData.data.memes

    const [memeImg, setMemeImg] = React.useState([])


    React.useEffect(() => {

        const productData = `http://127.0.0.1:8000/api_data/viewset/product/`

        // console.log(`The length is: ${productData.length}`)

        fetch(productData)
            .then(res => res.json())
            .then(productData => setMemeImg(productData))
    }, [])


    function changeImg() {

        const randomNum = Math.floor(Math.random() * 7)

        console.log("Random Num: ", randomNum)

        setMemeImg(prevVal => {
            return {
                ...prevVal,
                img: memeImg[randomNum].img
            }
        })
    }

    const imgStyle = {

        "paddingTop": "25px",
        "paddingBottom": "20px",

        "width": "540px",
        "height": "410px",
    }

    return (

        <div className="container form">

            <h1>Memes length: {memeImg.length}</h1>

            <form onSubmit={handleSubmit} className="offset-md-3 row g-3 needs-validation" noValidate>

                <div className="col-md-4">
                    {/*<label htmlFor="validationCustom01" className="form-label">First name</label>*/}
                    <input type="text"
                           className="form-control meme-input"
                           name={"firstJoke"}
                           value={inputs.firstJoke}
                           onChange={handleChange}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">

                    {/*<label htmlFor="validationCustom02" className="form-label">Last name</label>*/}

                    <input type="text" className="form-control "
                           name={"secondJoke"}
                           value={inputs.secondJoke}
                           onChange={handleChange}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-8 col-12 ps-2 pt-2">

                    <button
                        onClick={changeImg}
                        // onClick={() => setCount(count + 1)}
                            type={'submit'}
                            id={'btn'}
                            className={"meme-img-bg btn meme-img-text"}>
                        Get a new meme image
                    </button>

                </div>

            </form>

            <div className="offset-md-3 pt-2">

                <img id={'myImg'}
                     // src={firstImg}
                     src={memeImg.img}
                     className="rounded card-img-top"
                     style={imgStyle}
                     alt="..."/>

                <h6 className="d-inline">

                    <span className="meme-tag1">
                        {inputs.firstJoke}
                    </span>

                    <span className="meme-tag2">
                        {inputs.secondJoke}
                    </span>
                </h6>

            </div>

        </div>
    )

}