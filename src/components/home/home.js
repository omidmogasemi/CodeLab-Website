import React from "react";
import { Grid, Link } from "@material-ui/core";
import styles from "../../css/home.css"
import img from "./logo.svg"
import PastWorkCard from "../projects/pastWorkCard.js";


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
                <Grid container item xs={1} md={2}/>
                <Grid container item xs={11} md={3}>
                    <div className="circle" />
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
            <Grid container item xs={1} md={1}/>        
            <Grid container item xs={11} md={5}>
                <br></br>
                    <div className=  "longbox"/>
                    <br></br>
                    <div className=  "longbox"/>
                </Grid>
                <Grid contanier item xs={12} md={6}>
                <br></br>
                    <div className= "vtbox"/>
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
                        logo = "logo"
                        companyName= "Company Name" 
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus."
                    />    
                    </Grid>
                    <Grid container item xs={12} md={3}>
                        <div className = "homebox"/>
                    </Grid>
                    <Grid container item xs={0} md={1}/>
                        <Grid container item xs={12} md ={3}>
                            <div className = "homebox"/>
                        </Grid>
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