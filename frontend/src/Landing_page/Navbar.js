import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container">
                <Link to='/'><img  className="offset-1"src='/media/logo.svg' alt='logo' style={{ width:'40%' }} /></Link>
                
                <div class="collapse navbar-collapse offset-5" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active text-muted" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/Products">Products</Link>
                        </li>
                        <li class="nav-item">
                           <Link class="nav-link active text-muted" to="/Pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/Support">Support</Link>
                        </li>
                        <li className="nav-item text-muted nav-link">
                            <i class="fa-solid fa-bars"></i>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;