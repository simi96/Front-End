import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Sidebar = (props) => {
    const { sidebarArray } = props;
    return (
        <div style={{"background-color": "BlanchedAlmond"}}>
            <nav className="navbar navbar-dark bg-dark">
            {sidebarArray.map(item => {
                return (
                    <div className = 'header-class'>
                    <Link to ={item.link}>
                        <h2 style={{"color": "burlywood"}}>{item.label}</h2>
                    </Link>
                    </div>
                )
            })}
            </nav>
        </div>
    )
}

export default Sidebar
