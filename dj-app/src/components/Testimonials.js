import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class Testimonials extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            numImages: 0,
        }
    }

    handlePrevClick = () => {
        const prevState = this.state.numImages
        this.setState({
            numImages: prevState - 1,
        })
    }

    handleNextClick = () => {
        const prevState = this.state.numImages
        this.setState({
            numImages: prevState + 1,
        })
    }

    render(){
        const { numImages } = this.state
        return (
            <>
            <div style={{'backgroundColor': 'Ivory'}} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
         <div className = {numImages%4 === 0 ? "carousel-item-active" : "carousel-item"}>
            <img className = {'img-center'} width = '1000' src="./img1.png" />
        </div>
        <div className = {numImages%4 === 1 ? "carousel-item-active" : "carousel-item"}>
            <img className = {'img-center'} width = '1000' src="./img2.png"/>
        </div>
        <div className = {numImages%4 === 2 ? "carousel-item-active" : "carousel-item"}>
            <img className = {'img-center'} width = '1000' src="./img3.png"/>
        </div>
        <div className = {numImages%4 === 3 ? "carousel-item-active" : "carousel-item"}>
            <img className = {'img-center'} width = '1000' src="./img4.png"/>
        </div>
        </div>
        </div>
        <span style={{'backgroundColor': 'Ivory'}}>
            { numImages>0 &&  <img className={'arrow-left'} width = '100' onClick = {this.handlePrevClick}
        src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/OCR-A_char_Less-Than_Sign.svg/1200px-OCR-A_char_Less-Than_Sign.svg.png'/>}
         { numImages>=0 &&  <img className={'arrow-right'} width = '100' onClick = {this.handleNextClick}
        src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAgVBMVEX///8AAAA+Pj7v7+/p6enExMT39/fz8/OTk5NUVFS8vLxGRkZpaWnf39/6+vqZmZleXl7Ly8uHh4fW1tYwMDClpaW2trYLCwvd3d2rq6t4eHgqKirR0dHIyMiMjIwkJCRwcHBnZ2dBQUEXFxdMTEyDg4MVFRUdHR13d3cvLy9ZWVnTfQbPAAAEGUlEQVR4nO2ciVIaQRRFaUFc2ERQUVzAuMX//8AQg8oMw8y7qVT1oXLPF5yiqLn9lu5WyxhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxmwy7BzlVvhb2sfTtOLk/DK3iU73Jn1zmttGZJwK9Aa5hRQOU5mbYW6nMJMt+RXXua2iVMmnNJ3k9gpxXm2fUn8PPqDtXfIrRrnlGjmtsU8/7nLrNXBRZ7+Kr05uwVru6+1Tus9tWEe/yR4dvr1m+/SIDd+TgD03fG+a1T9ghu9l0D7Nb3OrVjCM2qe0BIbvzpNCBcDwFezT1WFu2zKVJ+Sd4MJ33Oy8yXlu3xKdB82fVrkfa/oHs9zCRTpPmv8CFr61B/0KLnILl2g8LBd5gIVvJ3Zk++Ksndu4yOGV5n+cW7iE+PWhhW/7TPN/goXvWAyv59zCJRoaDVvAwre70PSnsPCdTDX/RTe3cZFrTR8Xvs+a/us4t3CRQaTbswEtfNWz256HL61vqIYvbWh3q4YvrHRRwxfWN+y+afq0od3sQPPvw8I33LBdQ+sbKj3PFa+woZ1a+dL6hncvmj9taDfS9Gnhe7TU9GlDu9u55k8b2qmlCyx8h9Fh45o5LHwHYvjShnb/Wfi+OHz/KWrbmTa0E8P3ChZeavjChi5q+MJ+fTV8c9tuIVW+tKZVSwvf3K5VxMMXduhfEw3fRW7RaoIrAwe5PXcRCl+sfSh8wfaBtjPZvrntzLZvajvT7YvXoPbOvjWo+ffQ7Ye143a4fcOZE23fuCcAtg/saHDtIyM6qv0kVCQy7Y8Ct3B+85hbtIrwXJc2Ulkxfo3KJ1hHWdtnmOeWLSPtksC2OLVuZj+3bgGxk9zL7VtAXB5H/fLq8hfpP68u3qF6gOLSI2ppUBy7oW5LqPtGpGXZobjr9UbalRJH/agbWpOfmjxpQb8bPMR/ghpyisuZqAGzuBiLuhSkLiWjFivEhXDUUot4HkO9AqCex0jLXEPxPIZapFOjlbSJoEYraZYc7Y99guo0ictDqGgVF7dQL02pS3OoaBUXFlEvrIlVK+qijFq1kqJVvR6MilaxAEFdzhOmCB+QorX9rrmjolVsCL+TentiAYK6jD141ORRvT3xKgnqEQKxAEFFq3p/mdTbay81d9TDJ2IB0iMVIKEXPjcg9fZaLe29E9TYLPQy7DeosVlLeyUQNTb7QChCSNH6h0HYHRWta6IfS9TY7ItlTJ4UrRuEvvWosdkmgY897T23DRrtUWOzMk1FLKq3t0X9HA01NqtgVuPOi9Ytdt/uIvX2drErbFG9vd1U/vNRY7Naltvy0GitpNwvxkZrNYVmCGpsFqL71b3skcZmcWaXo9H1GHiGN8YYY4wxxhhj9plfn8o0eGsLWlgAAAAASUVORK5CYII='/>}
        </span>
        </>
        )
    }
}

export default Testimonials
