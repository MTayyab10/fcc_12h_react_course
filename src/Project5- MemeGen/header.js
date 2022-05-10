import React from "react";
import "../styles.css"
import reactLogo from "../images/logo192.png";

export default function Header(props) {


    return (
        <div className="meme-header">

             <div className="d-flex flex-row">

                 <div className="meme">
                     MemeGenerator
                 </div>

                <div className="ms-auto project">
                    React - Project 5,
                    Hello {props.userName}
                </div>

            </div>

        </div>
    )
}