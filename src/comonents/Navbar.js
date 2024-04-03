import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mt-0 `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TeaxtUtil</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Form">Form</Link>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex flex-end " role="search">
                        {/* <button class="btn btn-primary " type="submit">Search</button> */}
                        <div class={`form-check form-switch text-${props.mode==="light"? "dark":"light"} `}>
                            <input class="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.smode} mode</label>
                        </div>
                        
                        <div class={`form-check form-switch text-${props.mode==="light"? "dark":"light"} `}>
                            <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
                        </div>
                    </form> 
                </div>
            </nav>
        </>
    )
}
