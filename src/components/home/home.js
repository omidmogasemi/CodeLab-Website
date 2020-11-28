import React from "react";
import { Grid, Link } from "@material-ui/core";
import styles from "../../css/home.css"
import img from "./logo.svg"
import PastWorkCard from "../projects/pastWorkCard.js";
import alogo from "./ambiiLogo.png";
import Homepg from "./HomepageGraphic.png";
import left from "./left.png";
import bottom from "./bottomright.png";
import topright from "./topright.png";
import codelogo from "./codelabLogo.png";

function home(props) { 
    return (
        <Grid container> 
            <Grid container>
            <Grid container item xs={2} md={2}/>
            <Grid container item xs={10} md={3}>
            <div className="space" />
                <img class="imagestyle"src={img}/>
            </Grid>
            </Grid>

            <Grid container>
                <Grid container item xs ={1} md={2} />
                <Grid container item xs={11} md={4}>
                <p class="txtf">
                    We’re a team of driven, exploring developers at UC Davis, building projects for clients.
                </p>
                </Grid>
                <Grid container item xs={1} md={1}/>
                <Grid container item xs={11} md={4}>
                    <img className="homelogo" src={Homepg} />
                </Grid>
                <Grid container item xs={0} md={1} />
            </Grid>
            
            <Grid container>
            <Grid container item xs={2} md={3} />
                <Grid container item xs={9} md={6}>
                    <p className="toptext"> 
                    We're not just an orgranization, but a team
                    and a community, always learning from each other
                    and growing our skills togeter.
                    </p>
                    </Grid>
            <Grid container item xs={1} md={3}/>        
            </Grid>

            <Grid container>
            <Grid container item xs={0} md={1}/>        
            <Grid container item xs={12} md={5}>
                <img className="homelogo" src={left} style={{marginRight: "1rem"}}/>
            </Grid>
            <Grid contanier item xs={12} md={6}>
                    <img className="homelogo" src={topright} style={{marginBottom: "1rem"}}/>
                    <br></br>
                    <img className="homelogo" src={bottom}/>
            </Grid>
            </Grid>

            <Grid item>
            <div>
                <p className="tagtext"> <b>Our Projects</b></p>

            <Grid item container xs={12} md={12}>
                <p className="subtext">  Here are some of the projects we have worked on in the past. </p>
            </Grid>
            </div>
            </Grid>

            <Grid item>
                <div>
                    <br></br>
                    <Grid container>
                    <Grid container iem xs={12} md={4}>
                    <PastWorkCard 
                        logo = {alogo}
                        companyName= "Ambii" 
                        projectDescription= "Worked with Ambii, a music streaming service for buisnesses, to create an internal UI to manage their databases."
                    />    
                    </Grid>
                    <Grid container item xs={0} md={3}/>
                    <Grid container item xs={12} md={4}>
                    <PastWorkCard 
                        logo = {codelogo}
                        companyName= "CodeLab" 
                        projectDescription= "Built the many pages of CodLab's website with ReactJS."
                    />                        </Grid>
                        <Grid container item xs={0} md={1}/>
                    </Grid>
                </div>
            </Grid>

                <Grid item>
                    <div>
                        <p className="tagtext"> <b>Join Us! </b></p>
                        <br></br>
                        <Grid item container xs={12} md={12}>
                            <p className="subtext">  We recruit twice a year, once in fall quarter and once in spring quarter. </p>
                        </Grid>
                        <br></br>
                        <Grid contaner>
                        <Grid container item xs={1} md={1}/>
                        <div class="applybutton">
                            <Grid container item xs={11} md={11}>
                            <Link class="text" href="/contactus">
                                <body1 class="applybuttontext">Apply Here</body1>
                            </Link>
                            </Grid>
                        </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
    )
}

export default home;