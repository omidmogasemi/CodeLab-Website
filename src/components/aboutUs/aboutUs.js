import React from "react";
import "../../css/aboutUs.css"
import { Grid } from "@material-ui/core";



const about =()=> {
    return (
        <Grid container>
            <Grid container item xs={6}>
                <b>
                    <h1 className = "aboutus">
                        about us.
                    </h1>
                </b>
            </Grid>
            <div className = "groupPhoto" />
            <Grid container item xs={12} justify="center">
                <h2 className = "aboutustxt" >
                Hey, we’re Codelab. Here’s how we started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim volutpat dictum ullamcorper nec, velit, sed. Interdum faucibus lectus non aenean amet eleifend quis dolor scelerisque.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim volutpat dictum ullamcorper nec, velit, sed. Interdum faucibus lectus non aenean amet eleifend quis dolor scelerisque.
                </h2>
            </Grid>
            <h3 className = "alumni" >
                Where Our Alumni Are Now
            </h3>
            <div className = "alumniLogo1" />
            <div className = "alumniLogo2" />
            <div className = "alumniLogo3" />
            <div className = "alumniLogo4" />
            <div className = "alumniLogo5" />
            <div className = "alumniLogo6" />
            <div className = "alumniLogo7" />
            <div className = "alumniLogo8" />

            <h3 className = "team" >
                Our Team
            </h3>
            <div className = "teamPhoto1" />
            <div className = "teamPhoto2" />
            <div className = "teamPhoto3" />
            <div className = "teamPhoto4" />
            <div className = "teamPhoto5" />
            <div className = "teamPhoto6" />
            <div className = "teamPhoto7" />
            <div className = "teamPhoto8" />
            <div className = "teamPhoto9" />
            <div className = "teamPhoto10" />
            <div className = "teamPhoto11" />
            <div className = "teamPhoto12" />
        </Grid>
    )
}
export default about 