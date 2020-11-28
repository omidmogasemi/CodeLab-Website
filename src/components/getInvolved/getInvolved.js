import React from "react";
import { Grid, Link } from "@material-ui/core";
import GetInvolvedGraphic1 from "./GetInvolvedGraphic1.png"

function getInvolved(props) {
    return (
        <Grid container direction="column">
            <div>
                
                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <header className="getinvolved">get involved.</header>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <p className="getinvolvedsub">There are a couple ways to get involved and we would love for you to join us.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item md={1} />
                    <Grid item xs={6}>
                        <header className="projectteams">Project Teams</header>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item md={1} />
                    <Grid item xs={11} md={5}>
                        <div class="clientbox">
                            <header class="clientheader">Client Project</header>
                            <Grid item xs={11}>
                                <p className="clienttext">
                                    <br></br>
                                    Client project developers work on projects with companies and nonprofits. Client project developers should have more extensive programming experience. 
                                    <br></br>
                                    <br></br>
                                     Requirements:  
                                </p>
                            </Grid>
                            <Grid item xs={11}>
                                <ul className="clientreqs">
                                    <li>Taken or currently enrolled in ECS 36A, or equivalent programming experience.</li>
                                    <li>Completed a larger scale coding project (side project, industry experience, CodeLab project).</li>
                                </ul>
                            </Grid>  
                        </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={11} md={5}>
                        <div class="mentorbox">
                            <header class="mentorheader">Mentored Project</header>
                            <Grid item xs={11}>
                                <p className="mentortext">
                                    <br></br>
                                    For students with less programming experience, mentored project developers work on smaller projects under the guidance of a Project Mentor.
                                    <br></br>
                                    <br></br>
                                    Requirements:  
                                </p>
                            </Grid>
                            <Grid item xs={11}>
                                <ul className="mentorreqs">
                                    <li>Taken or currently enrolled in ECS 32A, or equivalent programming experience.</li>
                                    <li>Programming experience beyond coursework is great, but not a requirement.</li>
                                </ul>
                            </Grid>  
                        </div>
                    </Grid>
                </Grid>

            
                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={7} md={5}>
                        <header class="quarterheader">What does a typical term look like?</header>
                        <p class="quartertext">
                            Each year in CodeLab has two terms, a Fall term and a Winter/Spring term. The Fall term runs approximately 7 weeks in fall quarter, and the Winter/Spring term runs approximately 16 weeks across winter and spring quarter. This means the scale of projects will vary between terms. Recruitment occurs at the beginning of each term.
                            <br></br>
                            <br></br>
                            Over the course of the term, developers will have a series of meetings and presentations while working on their projects. Below is a general outline of a CodeLab term.
                        </p>
                            <ol>
                                <li>First General Meeting</li>
                                <li>Project Overview Meeting w/ Client (Client Teams)</li>
                                <li>Education Week</li>
                                <li>Midterm Presentations</li>
                                <li>Final Presentations</li>
                                <li>Handoff Meeting w/ Client (Client Teams)</li>
                            </ol>
                        
                    </Grid>
                    <Grid item md={1} />
                    <Grid item xs={8} md={4}>
                        <div class="qtrimagespace">
                            <img src={GetInvolvedGraphic1} alt="Get Involved!"></img>
                        </div>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item md={1} />
                    <Grid item xs={11}>
                        <header class="faqheader">Frequently Asked Questions</header>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={7} md={4} direction="column">
                        <header class="faqsubheader">Do I need to be a computer science major to apply to CodeLab?</header>
                        <p class="faqtext">Nope! We are open to undergraduate students at UC Davis of any major. You do need to have some programming experience to join. Detailed requirements are above.</p>
                    </Grid>

                    <Grid item xs={2} />
                    
                    <Grid item xs={7} md={4} direction="column">
                        <header class="faqsubheader">What types of projects do developers work on?</header>
                        <p class="faqtext">Anything computer science, whether it be web development or data science. Projects are largely reliant on the needs of our clients from term to term. Mentored projects can often be more flexible in the computer science fields they involve.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={7} md={4} direction="column">
                        <header class="faqsubheader">What is the time commitment like?</header>
                        <p class="faqtext">Developers are expected to put in 10+ hours a week. Depending on the part of the project you are working, this may fluctuate throughout the term. Being a developer can be time consuming. Before applying, please consider your other commitments to make sure you will be able to put in the time for CodeLab.</p>
                    </Grid>

                    <Grid item xs={2} />

                    <Grid item xs={7} md={4} direction="column">
                        <header class="faqsubheader">What does the recruitment process look like?</header>
                        <p class="faqtext">The process currently involves a written application and a single round of interviews. Don’t be nervous about interviews. We just want to get to know you and learn about your past experiences. It will not be technical.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={2} md={1} />
                    <Grid item xs={11}>
                        <header class="readytoapply">Ready to Apply?</header>
                    </Grid>
                    <Grid item xs={2} md={1} />
                    <Grid item xs={5} md={8}>
                        <p class="applytext">We’re currently taking applications for the Winter/Spring 2021 term. Applications are due Thursday, January 14th by 11:59PM.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={2} md={1} />
                    <Grid item xs={4}md={3}>
                        <div class="applybutton">
                            <p class="applybuttontext">Apply Here</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default getInvolved