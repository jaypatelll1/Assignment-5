import React from 'react'

export default function index() {
    return (
        <div>
             <div className="row navbar">
            <div className="col-2 d-flex align-items-center">
                <img className="img-fluid logo-custom" src="https://cdn.sanity.io/images/92ui5egz/production/f27e1e831b6433649df3d6556b92f2b1f519dee3-300x300.svg?rect=0,65,300,169&w=800&h=450&auto=format" />
            </div>
            <div className="col-8">
                <ul class="navtext d-flex justify-content-center h-100 align-items-center customUL">
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Donations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Resources</a>
                    </li>
                </ul>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
                <div className="buttonDonate">
                    <button className="btn btn-primary">DONATE US</button>
                </div>
            </div>
        </div>

        </div>
    )
}
