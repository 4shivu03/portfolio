import React from "react";
import { Link } from "react-router-dom";
import MyImage from '../images/home/home page.jpg'
import '../mainComponent/about.css'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg sticky-top bg-dark-subtle text-dark  d-flex justify-content-around">
                <Link class="navbar-brand text-dark fs-3" to="/">
                    <img src={MyImage} alt="Logo" width="40" height="40" class="d-inline-block rounded-circle align-text-top "/> Shivam Bhatt</Link>
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link active text-dark fs-5 card-hover"> Home</Link></li>
                    <li className="nav-item"><Link to="/About" className="nav-link  text-dark fs-5 card-hover"> About</Link></li>
                    <li className="nav-item"><Link to="/Project" className="nav-link  text-dark fs-5 card-hover"> Project</Link></li>
                    <li className="nav-item"><Link to="/Contact" className="nav-link  text-dark fs-5 card-hover"> Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;