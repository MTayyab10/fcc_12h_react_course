import "../styles.css"

export default function Card(props) {

    // const cardStyle = {
    //     "width": "18rem",
    // }

    // card image

    const cardImg = {
        // "width": "196px",
        // "height": "235px",

    }

    return (

        <div className="container p-2" >

            <div className="row">

                <div className="col-md-3">

                    <div className="card" >

                        <img src={props.img} className="rounded card-img-top" style={cardImg} alt="..."/>

                        <div className="card-info">

                            <p className="rating">
                                <i className="fas fa-star star"></i>
                                <span className="rating-num">
                                    {(Math.round(props.rating * 100) / 100).toFixed(1)}
                                </span>
                                (6) . USA
                            </p>

                            <p className="description">
                                {props.description}
                            </p>

                            <h3 className="price">

                                <span className="fw-bold pe-1">
                                   From $ {props.price}
                                </span>
                                / person
                            </h3>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}