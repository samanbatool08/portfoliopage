import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
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

                        <hr/>
                        <p>React | JavaScript | Ruby on Rails | NodeJS | HTML/CSS</p>
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

                        </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;