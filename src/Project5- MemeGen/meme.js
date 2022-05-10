import firstImg from "../images/Rectangle 84.png"
import secondImg from "../images/Pic.png"
import thirdImg from "../images/person.png"
import memeData from "./memeData";
import React from "react";

export default function Meme(props) {

    const imgStyle = {

        "paddingTop": "25px",
        "paddingBottom": "20px",

        "width": "540px",
        "height": "410px",
    }

    // const [changeMeme, setMemeImg] = React.useState(secondImg);
    const memeArr = memeData.data.memes
    const [changeMeme, setChangeMeme] = React.useState(memeArr[0])

    function changeImg() {
        // const memeArr = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        // document.getElementById('myImg').src = memeArr[randomNumber].img;

        setChangeMeme(prevMeme => {
            return {
                ...prevMeme,

                img: memeArr[randomNumber].img,
                joke: memeArr[randomNumber].joke,
            }
        })
    }

    return (

        <div className="container form">

            <form className="offset-md-3 row g-3 needs-validation" noValidate>

                <div className="col-md-4">
                    {/*<label htmlFor="validationCustom01" className="form-label">First name</label>*/}
                    <input type="text" className="form-control meme-input" id="validationCustom01"
                           value={changeMeme.joke.first} required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">

                    {/*<label htmlFor="validationCustom02" className="form-label">Last name</label>*/}

                    <input type="text" className="form-control " id="validationCustom02"
                           value={changeMeme.joke.second} required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

            </form>

            <div className="offset-md-3 pt-2">

                <div className="col-md-8 col-12 ps-2 pt-2">

                    <button onClick={changeImg} id={'btn'} className={"meme-img-bg btn meme-img-text"}>
                        Get a new meme image
                    </button>

                </div>

                <img id={'myImg'} src={changeMeme.img} className="rounded card-img-top" style={imgStyle} alt="..."/>

                <h6 className="d-inline">

                    <span className="meme-tag1">
                        {changeMeme.joke.first}
                    </span>

                    <span className="meme-tag2">
                        {changeMeme.joke.second}
                    </span>
                </h6>

            </div>

            <h3>User: {props.userName}</h3>
            <button onClick={props.changeName}>change name</button>

        </div>
    )
}