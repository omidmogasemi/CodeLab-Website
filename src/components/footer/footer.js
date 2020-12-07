import React from "react";
import { Grid, Link, Hidden, TextField } from "@material-ui/core";
import logo from "../../logo.png";
import "../../css/footer.css";

function Footer(props) {
  return (
    <Hidden only={['xs', 'sm']}>
      <Grid container direction="row" style={{marginBottom: "3rem"}}>
        <Hidden only={['xs', 'sm']}>
          <Grid container item md={2} direction="column" alignItems="center">
            <div className="links">
              <Grid container item>
                <body1>
                  <Link color="#000000" className="text" href="/about">
                    about us
                  </Link>
                </body1>
              </Grid>

              <Grid container item>
                <body1>
                  <Link color="#000000" className="text" href="/projects">
                    projects
                  </Link>
                </body1>
              </Grid>
              <Grid container item>
                <body1>
                  <Link color="#000000" className="text" href="/getinvolved">
                    get involved
                  </Link>
              </body1>
              </Grid>
              <Grid container item>
                <body1>
                  <Link color="#000000" className="text" href="https://medium.com/@codelabdavis">
                    blog
                  </Link>
                </body1>
              </Grid>
              <Grid container item>
                <body1>
                  <Link color="#000000" className="text" href="/contactus">
                    contact us
                  </Link>
                </body1>
              </Grid>
            </div>
          </Grid>
        </Hidden>

        <Grid container item xs={1} />

        <Grid containter item direction="column" xs={10} md={6} alignItems="center">
          <Grid container item xs={12} alignitems="center">
            <p className="mailingListText">Join our mailing list!</p>
          </Grid>

          <Grid container item xs={12}>
            <input id="emailbox" placeholder="Email" type="text" /> <input type="submit" />
            {/* <input className="mailingListBox" type="text" placeholder="Email" />
            <button className="submitButton">
              <body1 className="submitButtonText">Submit</body1>
            </button> */}
          </Grid>
        </Grid>

        <Grid container item xs={1} />

        <Hidden only={['xs', 'sm']}>
          <Grid container item xs={true} md={2} justify="center">
            <Link href="/">
              <img src={logo} className="logoposition" />
            </Link>
          </Grid>
        </Hidden>
      </Grid>
    </Hidden>
  );
}

export default Footer;
