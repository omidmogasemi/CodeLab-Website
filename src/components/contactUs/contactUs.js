import React from "react";
import "./contactUs.css";
import InputBox from "./inputBox";
import { Grid } from "@material-ui/core";
{
  /*import { Input } from 'semantic-ui-react';*/
}

function contactUs(props) {
  return (
    <Grid container>
      <Grid container xs={1} />
      <Grid container xs={10}>
        <Grid container item xs={12} md={12}>
          <div className="contactTitle"> contact us. </div>
          <Grid container item xs={12} md={12}>
            <h className="contactq"> You've got questions, we've got answers. </h>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={12}>
          <div>
            <p className="chatTitle"> Let's chat!</p>
          </div>
        </Grid>
        <Grid container item xs={12} md={3}>
          <p className="chatTxt">
            Whether you’re a potential client or a student with questions, shoot
            us a message through this form!
          </p>
        </Grid>
        <Grid container item xs={0} md={1}></Grid>

        <div className="space" />

        <Grid container item xs={12} md={4}>
          <InputBox width="21rem" height="3rem" prompt="Name" />
        </Grid>
        <Grid container item xs={4} md={4}>
          <InputBox width="21rem" height="3rem" prompt="Email Address" />
        </Grid>
        <Grid container item xs={12} md={3}>
          <p className="chatTxt">
            You can also reach us at daviscodelab@gmail.com.
          </p>
        </Grid>
        <Grid container item xs={0} md={1}></Grid>
        <Grid container item xs={12} md={8}>
            <InputBox width="43rem" height="15rem" prompt="Message" />
        </Grid>
        </Grid>
      <Grid container xs={1} />
    </Grid>
  );
}

export default contactUs;
