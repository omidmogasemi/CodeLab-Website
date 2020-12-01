import React from "react";
import "../../css/aboutUs.css"
import { Grid } from "@material-ui/core";
import groupphoto from "./images/GroupPhoto1.png"
import essam from "./images/essam.png"
import omid from "./images/omid.png"
import james from "./images/james.png"
import edward from "./images/edward.png"
import tom from "./images/tom.png"
import chris from "./images/chris.png"
import guk from "./images/guk.png"
import andy from "./images/andy.png"
import vishnu from "./images/vishnu.png"
import jeffrey from "./images/jeffrey.png"
import henry from "./images/henry.png"

const about =()=> {
    return (
        <Grid container>
            <Grid container>
                <Grid container item xs={1} />
                <Grid container item xs={10} md={3}>
                    <h1 className="aboutus">
                        about us.
                    </h1>
                </Grid>
                <Grid container item xs={1}/>
                <Grid container item xs={10} md={6}>
                    <Grid container item xs={2} />
                    <Grid container item xs={10}>
                        <img className="topimage" src={groupphoto} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={1} md={2} />
            <Grid container item xs={10} md={8} justify="center">
                <h2 className = "aboutustxt" >
                Hey, we’re Codelab. The four of us—Essam, Omid, James, and Edward—went through our first year at UC Davis feeling like there wasn’t enough of a computer science community. With heavily theoretical coursework, it could be difficult to develop the skills associated with real world applications of our coding knowledge. <br /><br />
                And so, we built CodeLab, a software development organization at UC Davis. In CodeLab, developers work in small teams on real-world projects, from web development to data science. Client Projects provide devlopers with the opportunity to contribute to companies, and Mentored Projects allow developers to learn new skills under the guidance of an experienced student. <br /><br />
                Today, we are a team of driven computer science students creating pieces of code we are proud of. And through it all, we are always learning and always innovating.
                </h2>
            </Grid>
            <Grid container item xs={1} md={2} />

            <Grid container xs={1} />
            <Grid container xs={10}>
                <Grid container item xs={12}>
                    <h3 className="teamtoptext">
                        Our Team
                    </h3>
                </Grid>

                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={essam} alt='' />
                        <body1 className="name">Essam Sleiman <br /></body1> 
                        <body1 className="title">President</body1>
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={omid} alt='' />
                        <body1 className="name">Omid Mogasemi<br /></body1> 
                        <body1 className="title">VP of Projects</body1>       
                     </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={james} alt='' />
                        <body1 className="name">James Junaidi <br /></body1> 
                        <body1 className="title">VP of Operations</body1>      
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={edward} alt='' />
                        <body1 className="name">Edward Chew <br /></body1> 
                        <body1 className="title">VP of External</body1>               
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={tom} alt='' />
                        <body1 className="name">Tom Abraham <br /></body1> 
                        <body1 className="title">Developer</body1> 
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={chris} alt='' />
                        <body1 className="name">Chris Havens <br /></body1> 
                        <body1 className="title">Developer</body1>      
                     </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={guk} alt='' />
                        <body1 className="name">Guk Kim <br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={andy} alt='' />
                        <body1 className="name">Andy Ren <br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={vishnu} alt='' />
                        <body1 className="name">Vishnu Vennelakanti <br /></body1> 
                        <body1 className="title">Developer</body1>                   
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={jeffrey} alt='' />
                        <body1 className="name">Jeffrey Zang <br /></body1> 
                        <body1 className="title">Developer</body1> 
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} style={{marginBottom: "0.5rem"}}>
                    <div className="teamPhoto" >
                        <img src={henry} alt='' />
                        <body1 className="name">Henry Zhu <br /></body1> 
                        <body1 className="title">Developer</body1> 
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={1} />
        </Grid>
    )
}
export default about 