import React from "react"

export default function Calculator() {

    const [inputs, setInputs] = React.useState({})


    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({
            ...values,
            [name]: value,
        }))
    }

    const ope = inputs.operator
    const num1 = inputs.first
    const num2 = inputs.second

    let ans;

    if (ope === "+") {
        ans = num1 + num2;
    } else if (ope === "*")
        ans = num1 * num2;
    else if (ope === "-")
        ans = num1 - num2;
    else if (ope === "/")
        ans = num1 / num2;
    else
        ans = "Wrong Operator"

    function handleSubmit(event) {

        event.preventDefault();

        document.getElementById('ans').innerHTML = ans;
        // alert(`${inputs.first}`)
    }


    return (

        <form onSubmit={handleSubmit}>

            <h2 className={"text-info"}>
                Beautiful Calculator
            </h2>

            <label>
                Enter first number: <input
                type={"number"}
                name={"first"}
                value={Number(inputs.first || 0)}
                onChange={handleChange}


                />
            </label>
            <br />

            <label>
                Enter second number: <input
                type={"number"}
                name={"second"}
                value={Number(inputs.second || 0)}
                onChange={handleChange}
            />
            </label>

            <br />


            <label>
                Choose Operator: <input
                type={"text"}
                name={"operator"}
                value={inputs.operator}
                onChange={handleChange}
            />
            </label>

            <br />

            <input type={"submit"} value={"Calculate"}  />

            <h2 id={"ans"} className={"text-danger"}></h2>

            <h3>addition is {typeof (inputs.first) + typeof (inputs.second)}</h3>

        </form>

    )

}