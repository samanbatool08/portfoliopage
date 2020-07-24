import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
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
                        half page 
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;