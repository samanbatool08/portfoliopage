import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../Projects.css'

class Project extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories() {
    if(this.state.activeTab === 0){
        return(
            <div className='projects-grid'>

                {/* Project 1 */}

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000000', height: '176px', background: 'url(/amazon2.00.png) center / cover'}}></CardTitle>
                        <CardText>
                            <p className='projects-title'>AMAZON 2.0</p>
                            E-Commerce site (Amazon clone) implemented with React Context API in order to retreive user data and activity. Firebase used for data management, User Auth and hosting.
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, React, React Context API, Firebase, React Router, Material UI, Flex, Grid

                        </CardText>
                        <CardActions border>

                            <a href='https://clone-1cbc8.web.app/' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='https://github.com/samanbatool08/amazon-2.0' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='' style={{display: 'inlineBlock', pointerEvents: 'none'}} target="_blank">
                            <Button colored>Demo N/A</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/weather.png) center / cover'}}></CardTitle>
                        <CardText>
                        <p className='projects-title'>Weather I should go?</p>
                            Weather conditions based on manual and current location connected to real time activities for users to save and create their own visit list. 
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, React, Redux, Ruby on Rails, Google Maps, OpenWeather API, Heroku, Bootstrap

                        </CardText>
                        <CardActions border>

                            <a href='https://weatheryoushouldgo-app.herokuapp.com/weather' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='https://github.com/samanbatool08/weather-ishouldgo-frontend' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='https://youtu.be/5DfmpRz1lyc' target="_blank">
                            <Button colored>Demo</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                     {/* Project 2 */}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/painterly.png) center / cover'}}></CardTitle>
                        <CardText>
                            <p className='projects-title'>Painterly</p>
                            Users can create their own drawings journal and further organize them into different collections/albums to reflect or finish later. Grid and board structure built manually on frontend using React component hierarchy. 
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, React, Hooks, Ruby on Rails, ActiveRecord, Heroku

                        </CardText>
                        <CardActions border>

                            <a href='https://painterly-drawing-app.herokuapp.com/' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='https://github.com/samanbatool08/painterly-frontend' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='https://youtu.be/VAqojoB4fyE' target="_blank">
                            <Button colored>Demo</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                   {/* Project 3 */}
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/boggle.png) center / cover'}}></CardTitle>
                        <CardText>
                            <p className='projects-title'>Boggle</p>
                            Play a game of boggle with all the correct rules to join connecting letters to create words ranging from 3 letters or more. Hitting a manual dictionary model in the backend to retrieve score in minimal time. 
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, Ruby on Rails, PostgreSQL, Heroku, Bootstrap
                        </CardText>
                        <CardActions border>

                            <a href='https://boggle-game-app.herokuapp.com/' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='https://github.com/samanbatool08/boggle-pro-frontend' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='https://youtu.be/I3XIG8QjI4s' target="_blank">
                            <Button colored>Demo</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                
            </div>
        )       
    }
    }

    render() {
        return (
            <div>
                <div className='category-tabs'>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                        <Tab>Projects</Tab>
                    </Tabs>

                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                </div>
            </div>
        )
    }
}

export default Project;