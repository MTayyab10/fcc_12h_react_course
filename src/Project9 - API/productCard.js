import React from "react";

export default function ProductCard(props) {


    return (

        <div className={"container"}>

            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.val.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {props.val.name} <span
                                className={"text-danger"}>
                                Rs. {props.val.price}
                            </span>
                            </h5>
                            <p className="card-text">
                                {props.val.description}
                            </p>
                            <p className="card-text"><small className="text-muted">
                                Last updated {props.val.updated_date}
                            </small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}