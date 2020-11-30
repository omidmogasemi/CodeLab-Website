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
            <div className = "groupPhoto" >
                <img src = "/aboutImages/GroupPhoto 1.png" alt='' />
            </div> 
            <Grid container item xs={12} justify="center">
                <h2 className = "aboutustxt" >
                Hey, we’re Codelab. The four of us—Essam, Omid, James, and Edward—went through our first year at UC Davis feeling like there wasn’t enough of a computer science community. With heavily theoretical coursework, it could be difficult to develop the skills associated with real world applications of our coding knowledge.

And so, we built CodeLab, a software development organization at UC Davis. In CodeLab, developers work in small teams on real-world projects, from web development to data science. Client Projects provide devlopers with the opportunity to contribute to companies, and Mentored Projects allow developers to learn new skills under the guidance of an experienced student.

Today, we are a team of driven computer science students creating pieces of code we are proud of. And through it all, we are always learning and always innovating.
                </h2>
            </Grid>

            <h3 className = "team" >
                Our Team
            </h3>
            <div className = "teamPhoto1" >
            <img src = "/aboutImages/Group 8.png" alt='' />
            </div>
            <div className = "teamPhoto2" >
            <img src = "/aboutImages/Group 9.png" alt='' />
            </div>
            <div className = "teamPhoto3" >
            <img src = "/aboutImages/Group 10.png" alt='' />
            </div>
            <div className = "teamPhoto4" >
            <img src = "/aboutImages/Group 11.png" alt='' />
            </div>
            <div className = "teamPhoto5" >
            <img src = "/aboutImages/Group 12.png" alt='' />
            </div>
            <div className = "teamPhoto6" >
            <img src = "/aboutImages/Group 13.png" alt='' />
            </div>
            <div className = "teamPhoto7" >
            <img src = "/aboutImages/Group 14.png" alt='' />
            </div>
            <div className = "teamPhoto8" >
            <img src = "/aboutImages/Group 15.png" alt='' />
            </div>
            <div className = "teamPhoto9" >
            <img src = "/aboutImages/Group 17.png" alt='' />
            </div>
            <div className = "teamPhoto10" >
            <img src = "/aboutImages/Group 18.png" alt='' />
            </div>
            <div className = "teamPhoto11" >
            <img src = "/aboutImages/Group 19.png" alt='' />
            </div>
            
        </Grid>
    )
}
export default about 