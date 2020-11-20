import React from "react";
import "../../css/projects.css";
import PastWorkCard from "./pastWorkCard";
import { Grid } from "@material-ui/core";

function projects(props) {
    return (
        <div>
            <Grid container>
                <Grid container item xs={1}></Grid>
                <Grid container item xs={11}>
                    <div className="projectTitle">projects.</div>
                </Grid>
                <Grid container item xs={1}></Grid>
                <Grid container item xs={11}>
                    <p className="projectDesc">
                        Each quarter, our teams take on projects
                        for clients or for developing the team's
                        coding skills.
                    </p>
                </Grid>
                <Grid container item justify="center" xs={12}>    
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

                <Grid container item xs={1}></Grid>
                <Grid container item xs={11}>
                    <p className="pastWork">Here's some of our past work.</p>
                </Grid>

            </Grid>

            <Grid container justify="space-between">
                <Grid container item xs={1}></Grid>
                <Grid container justify="space-between" item xs={10}>
                        <PastWorkCard 
                            logo="logo" 
                            companyName="Company Name" 
                            projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus."
                        />
                        <div className="greyPlaceHolder"></div>
                        <div className="greyPlaceHolder"></div>
                </Grid>
                <Grid container item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default projects;