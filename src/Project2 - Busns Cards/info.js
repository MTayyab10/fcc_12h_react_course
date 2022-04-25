import pic from "../images/Pic.png"
import "../styles.css"
import About from "./about";
import SocialIcons from "./social_icons";

export default function Info() {

    const cardStyle = {
        "width": "18rem",
    }

    return (

        <div className="container p-2">
            <div className="card" style={cardStyle}>

                <img src={pic} className="rounded card-img-top" alt="..."/>

                <div className="card-body text-center card-bg">

                    <h3 className="card-title text-white">Laura Smith</h3>
                    <h5>Frontend Developer</h5>
                    <p className="card-text">
                        myshop.website
                    </p>

                    <a href="#" className="btn btn-light d-inline-block email">
                        <i className="fas fa-envelope me-2"></i>
                        Email
                    </a>

                    <a href="#" className="btn d-inline-block linkedIn">
                        <i className="fab fa-linkedin me-2"></i>
                        LinkedIn
                    </a>

                    <About />
                </div>

                <SocialIcons />

            </div>
        </div>
    )
}