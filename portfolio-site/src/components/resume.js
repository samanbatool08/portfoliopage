import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Resume extends Component {
    render() {
        return (
            <div>
              <Grid>
                <Cell className="resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img 
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                    

                    <h2 style={{paddingTop: '2em'}}>Saman Batool</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft: '25%'}}/> */}


                {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft: '25%'}}/> */}

                {/* <h2>Skills</h2> */}

                    <Skills 
                        skill='javascript&nbsp;&nbsp;'
                        progress={100}
                    />
                    <Skills 
                        skill='ruby on rails'
                        progress={80}
                    />
                    <Skills 
                        skill='React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                        progress={85}
                    />
                    <Skills 
                        skill='HTML/CSS'
                        progress={65}
                    />
                </div>
                    <ListItem style={{marginLeft: '30%'}}>
                        <ListItemContent style={{fontSize: '14px', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;'}}>
                                <i className="fa fa-envelope" aria-hidden="true" />
                            &nbsp; samanbatool08@gmail.com
                        </ListItemContent>  
                    </ListItem>
                </Cell>

                <Cell className="resume-right-col" col={8}>

                    {/* <h2>Who, what, where? </h2> */}


                    <div className="about-desc">
                        
                        Upon graduating with a neuroscience degree and working in computational research for almost 3 years, I realized the magnitude of data in solving fundamental real life problems. My intrigue for technology led me to working at a data science startup whilst continuing research. Although I worked on the business development side - where I gained invaluable project management, creative marketing and time complexity skills - my mind always shifted towards website curation, data analysis and how to create and build something invaluable for our audience. 
                        <br /> <br />
                        Skip forward to 2 years working in the fast paced startup environment and completing almost 17 research projects, I enrolled in an immersive Software Engineering program to put my passion to practice. I learned to build projects with a range of backend and frontend languages such as ReactJS and Ruby on Rails. Today, I’ve built over 5 multipurpose projects with API curation all while playing with complex data structures in order to create the utmost user experience and functionality. In my head it’s simple: the best user stories come from the value and enthusiasm of the coder(s). 
                        <br /> <br />
                        I’m excited to join a team of equally enthusiastic engineers in order to build valuable audience experiences while having fun debugging and dealing with complex algorithmic techniques behind the scenes. 
                        

                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <span>Edit: </span>currently working on a Social Impact platform in hopes to provide voices to women around the country to share career experiences utilizing Natural Language Processing. 
                    
                    </div>

                    
                
                </Cell>    
              </Grid> 
            </div>
        )
    }
}
 
export default Resume;