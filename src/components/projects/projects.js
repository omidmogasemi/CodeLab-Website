import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./projects.css"




function projects(props) {
    return (
        <div>
            <div className="projectTitle" style={{}}>projects.</div>
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
        </div>
    )
}

export default projects;