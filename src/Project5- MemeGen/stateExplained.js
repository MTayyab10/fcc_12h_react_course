import React from "react"

export default function StateExplained() {

    // complex state for Obj to change info

    const contactInfo = {
        id: 3,
        name: "Tayyab",
        city: "Beijing",
        mobile: 18519204393
    }

    const [contact, setContact] = React.useState(contactInfo)

    function changeInfo() {
        setContact(prevContact => {
            return {
                ...prevContact, // it's a spread-method
                id: 1,
                city: "Lahore",
                mobile: 2322245555
            }
        })
    }
    // Short version of above obj state

    // setContact(prevContact => ({
    //     ...prevContact,
    //     city: "Lahore",
    // }))


    // complex state for Array to add items

    const itemsArr = ["milk", "dates", "water"];

    const [items, setItems] = React.useState(itemsArr);

    function addItems() {

        const newItem = `item, ${items.length}`;

        // prevItem.concat(newItem)
        setItems(prevItem => [...prevItem, newItem])
    }

    const itemsMap = items.map(val =>
        <h3 key={val}>{val}</h3>
    )


    // state for update number

    let [number, setNumber] = React.useState(1)

    function increment() {

        setNumber(prevNumber => prevNumber + 1);

        console.log("Increment", number)
    }

    // Ternary operator

    const r = number >= 10 ? "Number is greater than 10"
        : "Number is less than 10";

    function decrement() {

        if (number > 0)
            setNumber(prevNumber => prevNumber - 1);

        console.log("Decrement", number)
    }

    const [isGoing, setIsGoing] = React.useState(true);

    function goingOn() {

        setIsGoing(prevGoing => !prevGoing);
    }


    return (

        <div className={"container pt-5 text-center"}>

            <div>
                <h2>Id: {contact.id}</h2>
                <h2>Name: {contact.name}</h2>
                <h2>City: {contact.city}</h2>
                <h2>Mobile: {contact.mobile}</h2>

                <button onClick={changeInfo} className={"btn btn-primary"}>
                    change info
                </button>
            </div>

            {itemsMap}

            <button className={"btn btn-secondary"} onClick={addItems}>
                add item
            </button>


            <h1 className={"text-primary"}>{number}</h1>
            <h3>{r}</h3>

            <button onClick={increment} className={"btn btn-secondary fs-4"}>
                +
            </button>

            <button onClick={decrement}
                    className={number <= 0 ? "disabled" : "btn btn-secondary ms-3 fs-4"}>
                -
            </button>

            <h3>Are you going out? {isGoing ? "Yes" : "No"}</h3>

            <button className={"btn btn-danger"} onClick={goingOn} >
                {!isGoing ? "Yes" : "No"}
            </button>

        </div>
    )

}