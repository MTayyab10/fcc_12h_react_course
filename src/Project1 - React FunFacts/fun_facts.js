import reactLogo from "../images/logo192.png"
import "../styles.css"


export default function FunFacts() {

    return (

        <div className="main">

            <div className="bg-dark">
                <div className="container">

                    <div className="d-flex flex-row ">

                        <div className="offset-md-2 p-2 ">

                            <img src={reactLogo} alt="react-logo" className="me-1 pb-2" width="32px"/>

                            <h2 className=" me-3 react-color" >ReactFacts</h2>
                        </div>

                        <div className="p-2  offset-md-2">
                            <h2 className=" ms-3 text-white">React Course - Project 1</h2>

                        </div>
                    </div>

                </div>
            </div>

            <div className="main-facts">
                <div className="offset-md-4 col-md-4 p-3">

                    <h2 className="text-white">Fun facts about React</h2>

                    <ul className="text-white pt-2 pb-2 bullet">

                        <li className="">
                            Developed by Facebook in 2013.
                        </li>

                        <li className="bullet">
                            Most popular JavaScript framework right now.
                        </li>

                        <li className="">
                            It's maintained by world best Programmers.
                        </li>

                        <li className="">
                            100K Stars on GitHub repo.
                        </li>

                    </ul>
                </div>
            </div>

        </div>

    )
}
