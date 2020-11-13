import React from "react";
import "./contactUs.css"
import InputBox from "./inputBox"
import { Grid } from "@material-ui/core";

function contactUs(props) {
  return (
    <Grid container>
      <Grid container item xs={3}>
        <div className="contactTitle"> contact us. </div>
      </Grid>
      <Grid container item xs={12}>
        <div>
          <h>
          <p className="contactq"> You've got questions, we've got answers. </p>
          </h>
        </div>
      </Grid>
      
      <Grid container item xs={12}>
        <div>
          <p className="chatTitle"> Let's chat!</p>
        </div>
      </Grid>
      <Grid container item xs={4}>
        <p className="chatstyle">
          Whether you’re a potential client 
          or a student with questions, 
          shoot us a message through this 
          form!. 
          <br></br>
          <br></br>
          You can also reach us at
          daviscodelab@gmail.com.
        </p>
      </Grid>
      <Grid container item xs={8}>
        <div>
          <InputBox width="333px" height ="53px" prompt="Name"/>
          <InputBox width="333px" height ="53px" prompt="Email Address"/>
          <InputBox width="685px" height ="232px" prompt="Question"/>
        </div>
      </Grid>
    </Grid>
  );
}

export default contactUs;
