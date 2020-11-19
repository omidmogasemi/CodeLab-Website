import React from "react";
import { Grid, Link } from "@material-ui/core";

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
                        <p className="getinvolvedsub">There are many different ways to get involved and we would love for you to join us.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <header className="projectteams">Project Teams</header>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <div class="clientbox">
                            <header class="clientheader">Client Project</header>
                            <Grid item xs={11}>
                                <p className="clienttext">
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus.
                                    <br></br>
                                    <br></br>
                                     Requirements:  
                                </p>
                            </Grid>
                            
                             <ul className="clientreqs">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Tristique sed quisque facilisis senectus.</li>
                                <li>In neque volutpat porta eget amet scelerisque nibh.</li>
                                <li>Maecenas tempor arcu lacus proin tempor egestas.</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <div class="mentorbox">
                            <header class="mentorheader">Mentored Project</header>
                            <Grid item xs={11}>
                                <p className="mentortext">
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus.
                                    <br></br>
                                    <br></br>
                                    Requirements:  
                                </p>
                            </Grid>

                            <ul className="mentorreqs">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Tristique sed quisque facilisis senectus.</li>
                                <li>In neque volutpat porta eget amet scelerisque nibh.</li>
                                <li>Maecenas tempor arcu lacus proin tempor egestas.</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

            
                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <header class="quarterheader">What does a typical quarter look like?</header>
                        <p class="quartertext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum.
                            <br></br>
                            <br></br>
                            Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed. Sed eget sed non sollicitudin. Ut sit nulla urna facilisis amet, euismod ut neque placerat. Senectus nunc orci metus montes, enim, lectus quam mi. Varius velit, commodo nisi, ipsum, sed diam. Sed at accumsan scelerisque facilisi nullam in. Commodo nec congue est diam. Sit elit orci, arcu arcu nulla sagittis mauris diam hendrerit.
                        </p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="qtrimagespace"></div>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={11}>
                        <header class="faqheader">Frequently Asked Questions</header>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={5} direction="column">
                        <header class="faqsubheader">Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed?</header>
                        <p class="faqtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum.</p>
                    </Grid>

                    <Grid item xs={1} />

                    <Grid item xs={5} direction="column">
                        <header class="faqsubheader">Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed?</header>
                        <p class="faqtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={5} direction="column">
                        <header class="faqsubheader">Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed?</header>
                        <p class="faqtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum.</p>
                    </Grid>

                    <Grid item xs={1} />

                    <Grid item xs={5} direction="column">
                        <header class="faqsubheader">Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed?</header>
                        <p class="faqtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={5} direction="column">
                        <header class="faqsubheader">Feugiat nec turpis sem sagittis nulla adipiscing bibendum sed?</header>
                        <p class="faqtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque non, aliquet sed sodales nunc ultricies morbi purus neque. Quam sed porttitor suspendisse nulla non semper sed ipsum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum. Quam egestas hendrerit nec imperdiet. Vestibulum tortor leo purus suspendisse tortor, mattis ornare nec massa. Cras rutrum augue purus quis arcu vel non. Adipiscing libero orci, ut lorem bibendum.</p>
                    </Grid>

                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item xs={11}>
                        <header class="readytoapply">Ready to Apply?</header>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                        <p class="applytext">We’re currently taking applications for the Winter 2021 term. Applications are due Wednesday, January 13th by 11:59PM.</p>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={1} />
                    <div class="applybutton">
                        <Grid item xs={11}>
                            <p class="applybuttontext">Apply Here</p>
                        </Grid>
                        
                    </div>
                </Grid>
                
               
            
                


            </div>
        </Grid>
    )
}

export default getInvolved