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
    const styles = {
        "flex": "0 0 auto",
        "display": "flex",
        "flex-direction": "column"
    }

    let badgeText;
    if (props.item.sold_out){
        badgeText = "SOLD OUT";
    }

    return (

        <div className="container p-2" >

            <div className="row">
                <div className="col-md-3">

                    <div className="card rounded-3">

                        <img src={props.item.img} className="rounded card-img-top" style={cardImg} alt="..."/>

                        {badgeText && <h6 className="d-inline">
                            <span className="text-secondary sold-out-notify badge bg-light">
                                {badgeText}
                            </span>
                        </h6>}

                        <div className="card-info">

                            <p className="rating">
                                <i className="fas fa-star star"></i>
                                <span className="rating-num">
                                    {(Math.round(props.item.rating.star * 100) / 100).toFixed(1)}
                                </span>
                                ({props.item.rating.peoples}) . USA
                            </p>

                            <p className="description">
                                {props.item.description}
                            </p>

                            <h3 className="price">

                                <span className="fw-bold pe-1">
                                   From ${props.item.price}
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