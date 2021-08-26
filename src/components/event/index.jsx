import React from 'react'

export default function index() {
    return (
        <div className="main-event mt-3">
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="eventCard">
                        <h1 className="display-5 text-light">#Events</h1>
                        <h2 className="text-white">The Water Project</h2>
                        <p className="text-white">You can help end the water crisis and restore hope. Together we'll provide access to clean, safe and reliable water across Earth- one community at a time.</p>
                    </div>
                </div>
                <div className="col-6 upcomingEvent">
                    <h2 className="display-6 text-white font-weight-bold">Upcoming <span className="spanEvent">Events</span></h2>
                    <div className="d-flex">
                        <span className="spanE"></span>
                    </div>
                    <div className="event-para">
                    <p>I became a charity: water supporter in 2010 and have campaigned once to raise money for clean water. Please consider joining me to support charity: water. 100% of your donation goes to clean water</p>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="calender">
                                <span className="digit">21</span>
                                <br/>
                                <span className="month">April</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="cal-head">
                                <h5>Legacy Giving</h5>
                                <p>
                                    Join us in shaping the future and making clean water a part of your lasting legacy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mt-3">
                        <div className="calender">
                                <span className="digit">05</span>
                                <br/>
                                <span className="month">June</span>
                            </div>
                        </div>
                        <div className="col-9 mt-3">
                        <div className="cal-head">
                                <h5>Sponsor a water project</h5>
                                <p>
                                Transform an entire community or school with a gift of $10,000 or more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
