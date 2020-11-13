import React from "react"

function PastWorkCard(props) {
    return (
        <div className="pastWorkCard">

            <p className="pastWorkCard-logo">{props.logo}</p>
            <p className="pastWorkCard-companyName">{props.companyName}</p>
            <p className="pastWorkCard-description">{props.projectDescription}</p>
        </div>
    );
}

export default PastWorkCard;