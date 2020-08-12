import React, { useState, useEffect } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <a href="https://drive.google.com/file/d/1uNCqMnbNRZ2Kw0XTT65bvxj-i2CGszAo/view?usp=sharing" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}><p style={{color: 'white', marginTop: '30%'}}>Resume</p></a>
                {/* <Link to="/resume">Resume</Link> */}
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Header>
       
        <Content>
          <Main />
        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
