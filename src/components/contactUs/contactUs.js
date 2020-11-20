import React from "react";
import "./contactUs.css"
import InputBox from "./inputBox"
import { Grid } from "@material-ui/core";
{/*import { Input } from 'semantic-ui-react';*/}

function contactUs(props) {
  return (
    <Grid container>
      <Grid container item xs={12}>
        <div className="contactTitle"> contact us. </div>
        <Grid container item xs={12}>
        <h className="contactq"> You've got questions, we've got answers. </h>
      </Grid>
      </Grid>
      
      <Grid container item xs={12}>
        <div>
          <p className="chatTitle"> Let's chat!</p>
        </div>
      </Grid>
      <Grid container item xs={3}>
        <p className="chatstyle">
          Whether you’re a potential client 
          or a student with questions, shoot us 
          a message through this form!
        </p>
      </Grid>
      <Grid container item xs={1}></Grid>
      <Grid container item xs={4}> 
        <InputBox width="333px" height ="53px" prompt="Name"/>
      </Grid> 
      <Grid container item xs={4}> 
        <InputBox width="333px" height ="53px" prompt="Email Address"/>
      </Grid>
      <Grid container item xs ={3}>
          <p className="chatstyle">
            You can also reach us at
            daviscodelab@gmail.com.
          </p>
    </Grid>
    <Grid container item xs={1}></Grid>
    <Grid container item xs={8}>
      <div>
        <InputBox width= "753px" height = "232px" prompt="Message"/>
      </div>
    </Grid>
    </Grid>
  );
}

export default contactUs;
