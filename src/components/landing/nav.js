import React from 'react';
import PropTypes from 'prop-types';


export default function Nav(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container nav-bg-black">
                <a class="navbar-brand" href="#page-top">{props.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        {/* <li class="nav-item"><a class="nav-link" href="#team">Team</a></li> */}
                        {/* -------------------- Conditional Nav Item ----------- */}
                        { props.searchBar === true ? <li class="nav-item"><a class="nav-link" href="#search">
                            <form class="inline-flex" >
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                        <i className='fa fa-search'></i>
                                    </button>
                            </form>
                        </a></li>:""}
                        {/* --------------------    -------------  ----------- */}
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Nav.propTypes = {
    title: PropTypes.string,
};