import React from "react";
import { Link } from 'react-router-dom'

const Navlinks = props => {
    let tempTabIndex
    if (props.isMobileLink) {
        tempTabIndex = "-1"
}
    return (
        <ul className="nav-links">
        <li>
            <Link to= "/" className="link" tabIndex = { tempTabIndex }>Homepage</Link>
        </li>
        <li>
            {/* <Link to="/" className= "link" tabIndex = { tempTabIndex }>Favorites</Link> */}
        </li>
        <li>
            {/* <Link to= "/about" className="link" tabIndex = { tempTabIndex }>Beach Spots</Link> */}
        </li>
        <li>
            <Link to= "/login" className="link" tabIndex = { tempTabIndex }>Login Page</Link>
        </li>


    </ul>
    )    
};

export default Navlinks