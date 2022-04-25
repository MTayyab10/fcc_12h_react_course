import AirBnbLogo from "../images/airbnb 1.png"
import Peoples from "../images/Peoples.png"


export default function Home() {

    return (

        <div>

            <div className="airbnb-logo">

                <a href={"https://myshopnow.herokuapp.com/"} target={"_blank"}>
                    <img src={AirBnbLogo} alt={"logo"}/>
                </a>

            </div>

            <div className="airbnb-people">

                <img src={Peoples} alt={"people"} />

            </div>

        </div>


    )

}