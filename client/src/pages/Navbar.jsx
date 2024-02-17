import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div>
        <nav class="navbar navbar-expand-lg alert alert-light">
            <div class="container-fluid ">
                <a class="navbar-brand fw-bolder text-danger" href="#">PORTFOLIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav text-danger fw-semibold shadow-lg d-flex ">

                        <li><Link class="nav-link active m-3 p-3 grow" to="/"><i class="bi bi-house"></i> Home</Link> </li>
                        <li><Link className='nav-link m-3 p-3 grow' to="/about-us"><i class="bi bi-file-person-fill"></i> About</Link></li>
                        <li><Link className='nav-link m-3 p-3 grow' to="/contact-us"><i class="bi bi-person-lines-fill"></i> Contact</Link></li>

                    </div>
                </div>


            </div>
        </nav >




    </div >
}

export default Navbar