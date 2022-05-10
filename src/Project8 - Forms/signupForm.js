import React from "react";

export default function SignUp() {

    const [inputs, setInputs] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        orderMode: "",
        terms: false

    })

    function handleChange(event) {


        const {name, value, type, checked} = event.target

        setInputs(values => {
            return {
                ...values,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }



    function handleSubmit(event) {

        event.preventDefault();

        const logic = inputs.password !== inputs.confirmPassword
        let msg;

        if (logic) {
            msg = "Your password didn't matched. Try again."
            console.log(msg)
        }
        else
            console.log("Congrats, You signed up")
        document.getElementById('msg').innerHTML = msg;



        const name = inputs.username;
        const email = inputs.email
        const city = inputs.city
        const order = inputs.orderMode
        const info = `User is ${name} and email addr ${email}`
        const info2 = `city is ${city} and send by ${order} and agree on terms ${inputs.terms}`
        const all_info = info + info2

        document.getElementById("signup").innerHTML = all_info;
    }
    console.log(inputs)


    return (

        <form onSubmit={handleSubmit} className="row g-3 ">

            <h2 className={"text-center text-danger"}>
                Signup Form</h2>

            <div className="offset-md-4 col-md-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control"
                       id="username"
                       name={"username"}
                       value={inputs.username}
                       onChange={handleChange}
                       required />
            </div>

            <div className="offset-md-4 col-md-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control"
                       id="email"
                       name={"email"}
                       value={inputs.email}
                       onChange={handleChange}
                       required />
            </div>

            <div className="offset-md-4 col-md-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control"
                       id="password"
                       name={"password"}
                       value={inputs.password}
                       onChange={handleChange}
                       required />
            </div>

            <div className="offset-md-4 col-md-4">
                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control"
                       id="confirmpassword"
                       name={"confirmPassword"}
                       value={inputs.confirmPassword}
                       onChange={handleChange}
                       required />
            </div>

            <div id={"msg"} className={"offset-md-4 col-md-4 alert alert-danger"} >


            </div>

            <div className="offset-md-4 col-md-4">
                <label htmlFor="city" className="form-label">State</label>
                <select className="form-select"
                        id="city"
                        name={"city"}
                        value={inputs.city}
                        onChange={handleChange}
                        required>
                    <option selected disabled value="">Choose city...</option>
                    <option>Kamonki</option>
                    <option>Tatlay Aali</option>
                    <option>Gujranwala</option>
                </select>
            </div>

            <div className="offset-md-4 form-check ">
                <input type="radio" className="form-check-input"
                       id="orderMode"
                       name="orderMode"
                       value={"Delivery"}
                       checked={inputs.orderMode === "Delivery"}
                       onChange={handleChange}
                       required/>
                <label className="form-check-label" htmlFor="orderMode">
                    Delivery
                </label>
            </div>

            <div className="offset-md-4 form-check">
                <input type="radio" className="form-check-input"
                       id="pickup"
                       name="orderMode"
                       value={"Pickup"}
                       checked={inputs.orderMode === "Pickup"}
                       onChange={handleChange}
                       required/>
                <label className="form-check-label" htmlFor="pickup">
                    Pickup
                </label>
            </div>

            <div className="offset-md-4 col-12">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input"
                           id="terms"
                           name="terms"
                           checked={inputs.terms}
                           onChange={handleChange}
                           required />
                        <label className="form-check-label" htmlFor="terms">
                            Agree to terms and conditions
                        </label>
                </div>
            </div>

            <div className="offset-md-4 col-12">
                <button className="btn btn-primary" type="submit">Signup</button>
            </div>

            <h3 id={"signup"}></h3>

        </form>
    )

}