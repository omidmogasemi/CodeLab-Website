import React from "react";
import { Grid, Link } from "@material-ui/core";

function home(props) {
    return (
     <Grid container> 

        <Grid container item xs={6}>
            Welcome to the CodeLab!
            <Grid item>
                <div>
                <label>
                Home page!
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQFZQpzhARjiRg/company-logo_200_200/0?e=2159024400&v=beta&t=RwjquZdpfq-lfaJ4dTNf_AFepRswZuSt8L0eS7nZD40"/>
                <logo></logo>
                </label>
                </div>
            </Grid>
            <Grid item>
                <label>
                We’re a team of driven, 
                exploring developers at UC Davis, 
                building projects for clients.
                </label>
            </Grid>
            </Grid>
             <Grid container item justify="flex-end" xs={6}>
            <Grid item>
                <label>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtndUuH8KTDrEYKGCnyn1-ZOGgZtJ-treQQ&usqp=CAU"/>
                </label>
            </Grid>
       </Grid>
    </Grid>
    )
}

export default home;