import React from 'react'

export default function index() {
    return (
        <div>
            <div className="row d-flex justify-content-between iconnav">
                <div className="col-5 d-flex">
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-youtube"></i></div>

                    <div className="d-flex call ">
                            <i className="fas fa-phone-volume"></i>
                    &nbsp;  <p className="iconnavtext" >+91 9326194769</p>
                    </div>
                </div>


                <div className="col-2 d-flex">
                            <i className="fas fa-user"></i>
                    &nbsp;  <a href="/" className="iconnavtext">Sign up</a>
                    &nbsp;  <i className="fas fa-lock"></i>
                    &nbsp;  <a href="/" className="iconnavtext">Login in</a>
                </div>
            </div>
        </div>
    )
}
