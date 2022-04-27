export default function Card(props) {

    const imgStyle = {
        "width": "220px",
        "height": "230px"

    }

    return (

        <div className="container pt-4">

            <div className="offset-md-2 col-md-10">
                <div className="mb-3">
                    <div className="row g-0">

                        <div className="col-md-3">
                            <img src={props.item.img} className="img-fluid rounded-start"
                                 style={imgStyle} alt="..."/>
                        </div>

                        <div className="col-md-5">
                            <div className="info">

                                <h5 className="card-title location">

                                    <i className="fas fa-map-marker-alt map-color"></i>

                                    {props.item.location}
                                    <span className="map">
                                        View on Google Maps
                                    </span>
                                </h5>

                                <h3 className={"title"}>
                                    {props.item.title}
                                </h3>

                                <h4 className={"date"}>
                                    {props.item.date.from} - {props.item.date.to}
                                </h4>

                                <p className="descrp">
                                    {props.item.description}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

