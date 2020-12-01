import React from "react";
import "../../css/projects.css";
import PastWorkCard from "./pastWorkCard";
import { Grid } from "@material-ui/core";
import ambiilogo from "./Ambii-Logo.png";
import codelablogo from "./LogoIcon.png";

function projects(props) {
    return (
        <div>
            <Grid container>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={11}>
                    <div className="projectTitle">projects.</div>
                </Grid>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={11}>
                    <p className="projectDesc">
                        Each quarter, our teams take on projects
                        for clients or for developing the team's
                        coding skills.
                    </p>
                </Grid>
                <Grid container item xs={0} md={3}></Grid>
                <Grid container item justify="center" xs={12} md={6}>    
                    <p className="projectWow">
                        In all our projects, we strive for 
                        <span className="redWow"> wow.</span>
                        <br></br>
                        <br></br>
                        We imagine, innovate, and constantly
                        learn new things to push the limits of what
                        we can do.
                    </p>
                </Grid>
                <Grid container item xs={0} md={3}></Grid>

                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={11}>
                    <p className="pastWork">Here's some of our past work.</p>
                </Grid>

            </Grid>

            <Grid container justify="flex-start" spacing={3}>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={3}>
                    <PastWorkCard 
                        logo={ambiilogo} 
                        companyName="Ambii" 
                        projectDescription="Worked with Ambii, a music streaming service for businesses, to create an internal UI to manage their databases."
                    />
                </Grid>
                <Grid container item xs={12} md={3}>
                    <PastWorkCard 
                        logo={codelablogo}
                        companyName="CodeLab"
                        projectDescription="Built the many pages of CodeLab’s website with ReactJS."
                    />
                </Grid>
                <Grid container item xs={12} md={3}></Grid>
                <Grid container item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default projects;