import React from "react";

export default function Joke(props) {


    const btnText = props.val.shown ? "Hide" : "Show"

    return (
        <div className={"pt-3 "}>

            <h2 className={"text-primary"}>
                {props.val.id}. {props.val.title}
            </h2>

            {props.val.shown &&

                <h4 className={"text-secondary"}>
                    {/*{showOrHide}*/}
                    {props.val.punchline}
                </h4>
            }

            <button onClick={props.changeVal} className={"btn btn-danger"}>
                {/*{props.val.shown ? "Hide Punchline"*/}
                {/*    : "Show Punchline"}*/}
                {btnText} Punchline
            </button>

            <hr />

        </div>
    )
}