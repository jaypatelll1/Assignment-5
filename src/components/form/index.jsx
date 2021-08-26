import React from 'react'

export default function index() {
    return (
        <div>
            <div class="container mb-5 formDiv">
      <div className="row">

      </div>
      <div className="row">
          <div className="col-6 mt-5">
              <h1 className="display-4 bold text-primary">Good News in </h1>
              <h1 className="display-2 bolder text-primary">Your Inbox!</h1>
              <div className="line5">
              <span></span>
          </div>
          </div>
          
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row mt-4 mb-2">
            <div className="col-6 form-group">
            
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Name"
          
              />
            </div>
            <div className="col-6 form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                class="form-control"
                id="tel"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="col-12">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Details"
            ></textarea>
          </div>
          <button className="btn btn-primary py-2 my-3">SEND NOW</button>
        </div>
        <div className="col-6">
            <img className="formImg" src="" alt="" />
        </div>
      </div>
    </div>
   </div>
    )
}
