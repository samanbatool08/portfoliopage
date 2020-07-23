import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

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
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/weather.png) center / cover'}}>Weather I should go?</CardTitle>
                        <CardText>Comparing global weather conditions to realtime activities.
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, React, Redux, Ruby on Rails, Google Maps, OpenWeather API, Heroku, Bootstrap

                        </CardText>
                        <CardActions border>

                            <a href='http://google.com' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='http://github.com' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='http://youtube.com' target="_blank">
                            <Button colored>Demo</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                     {/* Project 2 */}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/painterly.png) center / cover'}}>Painterly</CardTitle>
                        <CardText>Create your own drawing journal and organize them into different collections to reflect or finish later.
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, React, Hooks, Ruby on Rails, ActiveRecord, Heroku

                        </CardText>
                        <CardActions border>

                            <a href='http://google.com' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='http://github.com' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='http://youtube.com' target="_blank">
                            <Button colored>Demo</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                </Card>

                   {/* Project 3 */}
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(/boggle.png) center / cover'}}>Boggle</CardTitle>
                        <CardText>Enjoy a game of boggle using valid words rangings from 3 letters or more.
                                <br></br>
                                <br></br>
                                <strong>Tech:</strong> Javascript, Ruby on Rails, PostgreSQL, Heroku, Bootstrap
                        </CardText>
                        <CardActions border>

                            <a href='http://google.com' target="_blank">
                            <Button colored>Website</Button>
                            </a>

                            <a href='http://github.com' target="_blank">
                            <Button colored>Github</Button>
                            </a>

                            <a href='http://youtube.com' target="_blank">
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
                        <Tab>React</Tab>
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