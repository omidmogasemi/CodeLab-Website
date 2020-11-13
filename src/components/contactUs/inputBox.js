import React from "react"

function InputBox(props) {
    return (
        <div>
            <label> {props.prompt} </label>
            <br></br>
            <input />
        </div>
    );
}

export default InputBox;