import React from 'react'
import { bgImageUrl, courseContent } from "../constants";
import AccordianComponent from '../components/Accordian'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    const { title, djInfo } = props
    return (
        <div class="card bg-dark text-white">
  <img src={bgImageUrl} class="card-img" height='1000'/>
  <div className="card-img-overlay">
    <h1 className="card-title text-center display-2"><strong className ='proj-title'>{title}</strong></h1>
    <br/>
    <span className='dj-text'>{djInfo}</span>
    <br/><br/><br/><br/>
    <h3 className = 'sub-title'>{'Course Details'}</h3>
    <br/>
    <AccordianComponent data = {courseContent} allowZeroExpanded ={true}/>
  </div>
</div>
    )
}


export default Home
