import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/woman-user-human-avatar-person-profile-business/100/02-1User_13-512.png"
                            alt="pic"
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                        <div className='social-links'>
                                {/* LinkedIn  */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                              {/* GitHub  */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                              {/* Medium  */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-medium" aria-hidden="true"/>
                            </a>

                             {/* Email  */}
                             <a href="mailto: samanbatool08@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true"/>
                            </a>

                        </div>
                        <hr/>
                        <p>React | JavaScript | Ruby on Rails | NodeJS | HTML/CSS</p>

                    <div className='container'>
                        <div className='about-container'>
                            <p><Link to="/aboutme" style={{color: 'black', textDecoration: 'none'}}>A b o u t</Link></p>
                        </div>
                        
                        <div className='resume-container'>
                        <a href="https://docs.google.com/document/d/1uviv1b_QN7Bi1LZo6sxXdLmkr0GK7BPuqYqBf3bROGE/edit?usp=sharing" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}><p style={{color: 'black'}}>R e s u m e</p></a>
                        </div>
                        
                        <div className='projects-container'>
                            <p><Link to="/projects" style={{color: 'black', textDecoration: 'none'}}>P r o j e c t s</Link></p>
                        </div>
                    </div>


                        </div>

                    </Cell>
                </Grid>
            </div>
            
            </div>
        )
    }
}

export default Landing;