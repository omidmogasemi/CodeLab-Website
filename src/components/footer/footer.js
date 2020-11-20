import React from "react"
import { Grid, Link } from "@material-ui/core";
import logo from "../../logo.png";
import EmailBox from "./emailBox"


function Footer(props) {
    return(
        <Grid container>
          <Grid container item justify="flex-start" xs={3} direction="column">
            <div className="links">
              <body1>
                <Link class="text" href="/about">About</Link>
              </body1>
              <br></br>
              <body1>
                <Link class="text" href="/projects">Projects</Link>
              </body1>
              <br></br>
              <body1>
                <Link class="text" href="/getinvolved">Get Involved</Link>
              </body1>
              <br></br>
              <body1>
                <Link class="text" href="/contactus">Contact Us</Link>
              </body1>

    
            </div>
          </Grid>
            
          <Grid containter item xs={6} direction = "column">
              <div className = "mailingList">
              <p>Join our mailing list!</p>
              </div>
          <EmailBox width = "510px" height = "61px" prompt = "Email"/>
            </Grid>
            
                
             
             
          <Grid container item xs={3}>
            <Link href="/">
                <img class="logo" src={logo} />
            </Link>
          </Grid>
      

</Grid>

        
    )
}

export default Footer;