import React from 'react'
import {Link, useLocation} from "react-router-dom";
export const Navbar = () => {
    let location = useLocation();
    
    // React.useEffect(() => {
    //     console.log(location.pathname);
    //     }, [location]);
    return (
        <div>
            <ul className="nav justify-content-center py-2 bg-dark">
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Notes</Link>
            </li>
            </ul>
        </div>
    )
}