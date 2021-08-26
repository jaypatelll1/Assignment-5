import React from 'react'

export default function index() {
    return (
        <div>
            <div>
                <div className="secondDiv d-flex justify-content-center mt-4 add">
                    <img className="secondlogo img-fluid" src="https://cdn.sanity.io/images/92ui5egz/production/f27e1e831b6433649df3d6556b92f2b1f519dee3-300x300.svg?rect=0,65,300,169&w=800&h=450&auto=format" />
                </div>

                <div className="addheading">
                    <h1 className="display-5"><span>234,561</span> <br /> Number of supporters worldwide</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <span className="hr"></span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 p-0">
                        <img className="addimg" src="https://ettitude.com/wp-content/uploads/2021/03/Blog-Pictures-4.png" alt="" />
                    </div>
                    <div className="col-3 mission p-0">
                        <h1 className="text-center mt-5">Our Mission</h1>
                        <div className="d-flex justify-content-center">
                            <span className="hr2"></span>
                        </div>
                        <div className="content">
                            <p>See your support in action. We’ll tell you what our on-the-ground teams are doing to keep the water flowing, which specific communities have recently been visited, and what projects have been maintained and repaired.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
