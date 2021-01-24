import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const About = (props) => {
    const { userInfo, username, videoUrl, allowfullscreen } = props
    return (
        <div style={{"background-color": "BlanchedAlmond"}}>
            <h2 className="text-center fw-bolder display-4 proj-title">{'Instructor'}</h2>
            <br/>
            <div className = 'text-center'>
            <iframe width = '600' height = '400' className={'embed-responsive-item'} src = {videoUrl} allow='autoplay' allowFullScreen ={allowfullscreen}/>
            </div>
            <br/>
            <h2 className = "fw-bolder text-center display-4 sub-title">{username}</h2>
            <br/>
            {userInfo.map(item => {
                return (
                    <p className = 'dj-text'>{item}</p>
                )
            })}
        </div>
    )
}

export default About
