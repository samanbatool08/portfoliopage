import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Skills from './skills';


class About extends Component {
    render() {
        return (
            <div>
              <Grid>
                <Cell className="resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img 
                        src='/about4.png'
                        alt="avatar"
                        style={{height: '300px',   borderRadius: '10%', width: '280px'
                    }}
                        />
                    

                    <h2 style={{paddingTop: '0.5em', fontFamily: 'Rowdies, cursive', fontSize: '36px'}}>Saman Batool</h2>
                    <h4 style={{color: 'grey', fontFamily: 'Amiri, serif'}}>Programmer</h4>
                    {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft: '25%'}}/> */}


                {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft: '25%'}}/> */}

                {/* <h2>Skills</h2> */}

                    {/* <Skills 
                        skill='javascript&nbsp;&nbsp;'
                        progress={90}
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
                    /> */}
                </div>
                    <ListItem style={{marginLeft: '30%'}}>
                        <ListItemContent style={{fontSize: '14px', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;'}}>
                                <i className="fa fa-envelope" aria-hidden="true" />
                            &nbsp; samanbatool08@gmail.com
                        </ListItemContent>  
                    </ListItem>
                </Cell>

                <Cell className="resume-right-col" col={6}>

                    <h2 style={{fontFamily: 'Amiri, serif', marginBottom: '10px'}}>From where to where? </h2>


                    <div className="about-desc">
                        
                        Upon graduating with a neuroscience degree in 2017 and working in computational research for almost 3 years, I realized the magnitude of data in solving fundamental real life problems. My intrigue for technology led me to working at a data science startup whilst continuing research. Although I worked on the business development side - where I gained invaluable project management, creative marketing and time complexity skills - my mind always shifted towards website curation, data analysis and how to create and build something invaluable for our audience. 
                        <br /> <br />
                        Skip forward to 2 years working in the fast paced startup environment and completing almost 17 research projects, I enrolled in an immersive Software Engineering program to put my passion to practice. I learned to build projects with a range of backend and frontend languages such as ReactJS and Ruby on Rails. Today, I’ve built over 5 multipurpose projects with API curation all while playing with complex data structures in order to create the utmost user experience and functionality. In my head it’s simple: the best user stories come from the value and enthusiasm of the coder(s). 
                        <br /> <br />
                        I’m excited to join a team of equally enthusiastic engineers in order to build valuable audience experiences while having fun debugging and dealing with complex algorithmic techniques behind the scenes. 
                        

                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <span className='bold-ital'>Edit: </span> currently working on a Social Impact platform in hopes to provide voices to women around the country to share career experiences utilizing Natural Language Processing. Follow my blog to read about my experience ranging from web development to survey techniques at <span className='bold'>https://medium.com/@samanbatool08</span>.

                    
                    </div>

                    
                
                </Cell>    
              </Grid> 
            </div>
        )
    }
}

export default About;