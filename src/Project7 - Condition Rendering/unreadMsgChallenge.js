import React from "react"

export default function UnreadMsg() {

    const msgs = ["welcome", "your first order"];

    const [msg, setMsg] = React.useState(msgs);

    return (
        <div className={"container text-danger text-end"}>

            {msg.length ?
                <h4>
                    Hello, you have {msg.length} new
                    unread {msg.length === 1 ? "message" : "messages"}
                </h4>
                :
                <h4>You are all caught up.</h4>
            }
        </div>
    )

}
