import React from 'react'
import { Route, Switch } from 'react-router-dom'

import  { videoUrl, projectTitle, sidebarArray, djInfo, userInfo, backgroundimgprice } from '../constants'
import About from './About';
import  Batches from './Batches';
import  Testimonials from './Testimonials';
import  Referrals from './Referrals';
import  Home from './Home';
import Sidebar from './Sidebar';

const AppRoutes = () => {
    return (
        <>
        <Sidebar sidebarArray = {sidebarArray}/>
        <Switch>
            <Route path="/about" component={() => (<About username = {'DJ Chetas'} userInfo = {userInfo}
                videoUrl = {videoUrl} allowfullscreen = {false}/>)}/>
            <Route path="/batches" component={Batches}/>
            <Route path="/price" component={() => (<Referrals imageUrl = {backgroundimgprice} />)}/>
            <Route path="/testimonials" component={Testimonials}/>
            <Route path="" component={() => (<Home title = {projectTitle} djInfo={djInfo}/>)}/>
        </Switch>
        </>
    )
}

export default AppRoutes