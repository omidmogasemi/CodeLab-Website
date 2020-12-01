import React from "react";
import { Grid, Link } from "@material-ui/core";
import logo from "../../logo.png";
import "../../css/footer.css";

function Footer(props) {
  return (
    <Grid container direction="row">
      <Grid container item xs={6} md={3} direction="column">
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
              <Link color="#000000" className="text" href="/contactus">
                contact us
              </Link>
            </body1>
          </Grid>
        </div>
      </Grid>

      <Grid containter item direction="column" xs={6}>
        <Grid container item>
          <p className="mailingListText">Join our mailing list!</p>
        </Grid>

        <Grid container item>
          <input className="mailingListBox" type="text" placeholder="Email" />
          {/* <div className="submitButton">
            <p className="submitButtonText">Submit</p>
          </div> */}
          <button className="submitButton">
            <body1 className="submitButtonText">Submit</body1>
          </button>
        </Grid>
      </Grid>

      <Grid container item xs={12} md={3} justify="flex-end">
        <Link href="/">
          <img src={logo} />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
