import React from "react"

export default function AllInputTypes() {

    const [inputs, setInputs] = React.useState({
        firstName: "",
        lastName: "",
        textArea: "",
        title: true,
        orderMode: "",
        jobApply: ""
    })

    function handleChange(event) {
        // const name = event.target.name
        // const value = event.target.value

        const {name, value, type, checked} = event.target

        setInputs(values => ({
            ...values,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // alert(`Hello, ${name}`)
        const name = `${inputs.firstName}, ${inputs.lastName}`

        document.getElementById("name").innerHTML = `Hello, ${inputs.title}  <hr/>`;

        console.log(inputs)
    }


    return (

        <form onSubmit={handleSubmit}>

            <h2>Text Input Type</h2>

            <label> First Name: <br/>

                <input type={"text"}
                       name={"firstName"}
                       value={inputs.firstName}
                       onChange={handleChange}
                    // onChange={e => setName(e.target.value)}
                       required
                />

            </label>
            <br/>

            <label> Last Name: <br/>

                <input type={"text"}
                       name={"lastName"}
                       value={inputs.lastName}
                       onChange={handleChange}
                    // onChange={e => setName(e.target.value)}
                       required
                />

            </label>
            <br/>

            <h3 id={"name"} className={"text-danger"}>

            </h3>

            <h3>TextArea Input Type</h3>

            <textarea
                name={"textArea"}
                value={inputs.textArea}
                onChange={handleChange}

                rows={4}
                cols={20}

                placeholder={"Tell us about your startup ideas"}
            />
            <br/>

            <h3>Checkbox Input Type</h3>
            <br/>

            <label>

                <input
                    type={"checkbox"}
                    name={"delivery"}
                    checked={inputs.title}
                    onChange={handleChange}
                /> Founder & CEO
            </label>

            <br/>

            <h3>Radio Input Type</h3>

            <label>

                <input
                    type={"radio"}
                    name={"orderMode"}
                    value={"Delivery"}
                    checked={inputs.orderMode === "Delivery"}
                    onChange={handleChange}
                /> Delivery <br/>

            </label>

            <br/>

            <label>

                <input
                    type={"radio"}
                    name={"orderMode"}
                    value={"Pickup"}
                    checked={inputs.orderMode === "Pickup"}
                    onChange={handleChange}
                /> Pickup

            </label>
            <br/>

            <h3>{inputs.orderMode}</h3>

            <h3>Select & Option Input Type</h3>

            <label>
                Job Title <select
                name={"jobApply"}
                value={inputs.jobApply}
                onChange={handleChange}
            >
                <option>--- Choose Job Title--</option>
                <option value={"Frontend"}>
                    Frontend Engineer
                </option>
                <option>
                    Backend Engineer
                </option>
                <option selected>
                    Full Stack Engineer
                </option>

            </select>

            </label>

            <h3>{inputs.jobApply}</h3>

            <input type={"submit"}/>


        </form>

    )
}