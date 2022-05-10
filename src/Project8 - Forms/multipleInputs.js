import React from "react"

export default function MultipleInputs() {

    const [inputs, setInputs] = React.useState({})


    function handleChange(event) {

        const name = event.target.name
        const value = event.target.value

       setInputs(values => ({
               ...values,
               [name]: value
           }
       ))

    }

    function handleSubmit(event) {

        event.preventDefault();

        let info = `My name is ${inputs.username} and I am ${inputs.age} old.`

        document.getElementById('outputs').innerHTML = info;
        // alert(`Your name is ${inputs.username}`)

    }

    return (

        <form onSubmit={handleSubmit}>

            <h2 className={"text-primary pt-3"}>
                Multiple Inputs
            </h2>

            <label>
                Your Name: <input
                type={"text"}
                name={"username"}
                value={inputs.username || ""}
                onChange={handleChange}
            />
            </label>
            <br/>

            <label>
                Your Age: <input
                type={"number"}
                name={"age"}
                value={inputs.age || ""}
                onChange={handleChange}
            />
            </label>
            <br/>

            <input type={"submit"} />

            <h3 id={"outputs"}
                className={"text-danger pt-2"}></h3>

        </form>

    )
}