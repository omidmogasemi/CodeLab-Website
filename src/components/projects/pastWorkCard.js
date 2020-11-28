import React from "react";
import { Grid } from "@material-ui/core";
import "../../css/projects.css";
import ambiilogo from "./Ambii-Logo.png";
import codelablogo from "./LogoIcon.png";

function PastWorkCard(props) {
    return (
        <div className="pastWorkCard">
            {/* <p className="pastWorkCard-logo">{props.logo}</p>
            <p className="pastWorkCard-companyName">{props.companyName}</p>
            <p className="pastWorkCard-description">{props.projectDescription}</p> */}
            <Grid container>
                <Grid item container justify="center" xs={12}>
                    <img className="pastWorkCard-logo" src={props.logo} style ={{marginTop:"2.5rem"}}/>
                </Grid>

                <Grid item container xs ={1}></Grid>
                <Grid item container xs={11}>
                    <p className="pastWorkCard-companyName">{props.companyName}</p>
                </Grid>

                <Grid item container xs={1}></Grid>
                <Grid item container xs={11}>
                    <p className="pastWorkCard-description">{props.projectDescription}</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default PastWorkCard;