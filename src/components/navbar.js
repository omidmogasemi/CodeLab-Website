import React from "react";
import { Grid, Link } from "@material-ui/core";

function Navbar(props) {
    return (
        // this is a container, and the outermost "grid" element. this is what you wrap the rest of your grid stuff in
        <Grid container> 
            {/* this is a container item. the xs={6} means that you're taking up half of the width of the grid container, which is the width of the entire red rectangle */}
            {/* think of the full width of the page as a unit of 12. you are taking up the 6 most left units first, or 6/12 AKA 1/2 of the entire page.  */}
            <Grid container item xs={6}>
                The logo will go here!
            </Grid>
            {/* another container item taking up the right 6/12ths of the page */}
            <Grid container item justify="flex-end" xs={6}>
                {/* these are individual items inside of the container item. if you wanted each entry to be on a separate line you would not make them grid items */}
                <Grid item>
                    <body1>
                    <Link href="/">Home</Link>
                    </body1>
                </Grid>
                <Grid item>
                    <body1>
                    <Link href="/about">About</Link>
                    </body1>
                </Grid>
                <Grid item>
                    <body1>
                    <Link href="/projects">Projects</Link>
                    </body1>
                </Grid>
                <Grid item>
                    <body1>
                    <Link href="/getinvolved">Get Involved</Link>
                    </body1>
                </Grid>
                <Grid item>
                    <body1>
                    <Link href="/contactus">Contact Us</Link>
                    </body1>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar;