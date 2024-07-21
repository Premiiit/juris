import React from 'react'
// import jurisLogo from '../assets/image/juris_spectra_logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    {/* <img style={{borderRadius: "120px"}} className='mx-2' src={jurisLogo} alt="Bootstrap" width="40" height="40" /> */}
                    <a className="navbar-brand" href="/">Juris Spectra</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-1" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-1" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="/policy">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="/">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="/team">Team Members</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="/event">Event</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar