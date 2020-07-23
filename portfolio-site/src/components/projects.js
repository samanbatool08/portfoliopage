import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Project extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories() {
    if(this.state.activeTab === 0){
        return(
            <div>
                <h1>hitting react</h1>
                <Card shadow={5} style={{minWidth: '450', margin: 'aut0'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>React Project # 1</CardTitle>
                        <CardText>Some dummy text project summary goes here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>

                        </CardActions>
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

                    <section className="projects-grid">
                        <Grid className='projects-grid'>
                            <Cell col={12}>
                                <div className="content">
                                {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
                </div>
            </div>
        )
    }
}

export default Project;