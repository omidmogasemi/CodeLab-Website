import React from "react";
import { Grid } from "@material-ui/core";
import styles from "../../css/home.css"
import img from "./logo.svg"


function home(props) {
    return (
        <div>
        <br></br>
        <br></br>
        <Grid container> 
            <Grid container item xs={2}/>
            <Grid container item xs={3}>
                <img class="imagestyle" src={img}/>
                <label class="toptext">
                <br></br>
                <h>
                    <p className="txtf">
                        We’re a team of driven, exploring developers at UC Davis, building projects for clients.
                    </p>
                </h>
                </label>
            </Grid>
            <Grid container item xs={3} />
                <Grid container item xs={3}>
                    <Grid item>
                        <label>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtndUuH8KTDrEYKGCnyn1-ZOGgZtJ-treQQ&usqp=CAU"/>
                        </label>
                    </Grid>
                </Grid>
            <Grid container item xs={1} />
            </Grid>
            <br></br>
            <Grid container>
            <Grid container item xs={3} />
                <div>
                    <p className="toptext"> 
                    <br></br>
                    We're not just an orgranization, but a team
                    <br></br>                      
                    and a community, always learning from each other
                    <br></br>
                    and growing our skills togeter.
                    </p>
                </div>
            </Grid>
            <Grid container item>
                <Grid container item xs={6}>
                    <img src="https://png.pngitem.com/pimgs/s/205-2054666_black-transparent-rectangle-png-png-download.png" className=  "./homeimg"/>
                    <img src="https://png.pngitem.com/pimgs/s/205-2054666_black-transparent-rectangle-png-png-download.png" className = "./homesimg" />
                </Grid>
                <Grid contanier item xs={6}>
                    <img src="https://www.shareicon.net/data/512x512/2015/11/30/680302_vertical_512x512.png" className="./mainimg" />
                </Grid>
            </Grid>
        </div>
    )
}

export default home;