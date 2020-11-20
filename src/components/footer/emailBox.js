import React from "react"

function EmailBox(props) {
    return (
        <div>
            <label> {props.prompt} </label>
            <br></br>
            <input />
        </div>
    );
}

export default EmailBox;