import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/home";
import GetInvolvedPage from "./getInvolved/getInvolved";
import ProjectPage from "./projects/projects";
import AboutUsPage from "./aboutUs/aboutUs";

export default function RouterPage(props) {
    <Switch>
        <Route exact path="/" render={(props => (
            <>
                <HomePage {...props} />
            </>
        ))}
        />
        <Route exact path="/getinvolved" render={(props => (
            <>
                <GetInvolvedPage {...props}></GetInvolvedPage>
            </>
        ))}
        />
        <Route exact path="/projects" render={(props => (
            <>
                <ProjectPage {...props}></ProjectPage>
            </>
        ))}
        />
        <Route exact path="/aboutus" render={(props => (
            <>
                <AboutUsPage {...props}></AboutUsPage>
            </>
        ))}
        />
    </Switch>
}
