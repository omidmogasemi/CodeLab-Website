import React from "react";
import { Grid } from "@material-ui/core";
import styles from "../../css/home.css"
import img from "./logo.svg"

function home(props) {
    return (
     <Grid container> 
        <Grid container item xs={1}/>
        <Grid container item xs={4}>
            <img class="imagestyle" src={img}/>
            <label class="toptext">
            We’re a team of driven, exploring developers at UC Davis, building projects for clients.
            </label>
        </Grid>
        <Grid container item xs={2} />
            <Grid container item xs={4}>
                <Grid item>
                    <label>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtndUuH8KTDrEYKGCnyn1-ZOGgZtJ-treQQ&usqp=CAU"/>
                    </label>
                </Grid>
            </Grid>
        <Grid container item xs={1} />
    </Grid>
    )
}

export default home;