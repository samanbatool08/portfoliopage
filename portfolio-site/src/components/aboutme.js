import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div>
                <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Saman Batool</h2> 
                        <img 
                        src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                        alt='avatar'
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>here is the text you are going to put describing yoself</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    samanbatool08@gmail.com
                                </ListItemContent>
                            </ListItem>

                          
                        </List> 
                        </div>

                    </Cell>
                </Grid>
            </div>
            </div>
        )
    }
}

export default About;