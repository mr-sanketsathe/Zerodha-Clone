import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container">
                <Link to='/'><img  className="offset-1"src='/media/logo.svg' alt='logo' style={{ width:'40%' }} /></Link>
                
                <div className="collapse navbar-collapse offset-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-muted" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-muted" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-muted" to="/Products">Products</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link active text-muted" to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-muted" to="/Support">Support</Link>
                        </li>
                        <li className="nav-item text-muted nav-link">
                            <i className="fa-solid fa-bars"></i>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;