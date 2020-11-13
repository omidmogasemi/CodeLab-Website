import React from "react";
import "../../css/projects.css";
import PastWorkCard from "./pastWorkCard";
import { Grid } from "@material-ui/core";

function projects(props) {
    return (
        <div>
            <div className="projectTitle">projects.</div>
            <p className="projectDesc">
                Each quarter, our teams take on projects
                for clients or for developing the team's
                coding skills.
            </p>
            <p className="projectWow">
                In all our projects, we strive for wow.
                We imagine, innovate, and constantly
                learn new things to push the limits of what
                we can do.
            </p>

            <p className="pastWork">Here's some of our past work.</p>
            <PastWorkCard 
                logo="logo" 
                companyName="Company Name" 
                projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus."
            />     
        </div>
    )
}

export default projects;