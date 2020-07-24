import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Saman Batool</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>some text here if you need</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>1 Hackey Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>516 710 5444</p>
                    <h5>Email</h5>
                    <p>samanbatool08@gmail.com</p>
                    <h5>Website</h5>
                    <p>samanbatool.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>

                <Cell className="resume-right-col" col={8}>
                    Right Side
                </Cell>    
              </Grid> 
            </div>
        )
    }
}
 
export default Resume;