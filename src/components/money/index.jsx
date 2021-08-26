import React from 'react'
let array1 =
  [
    {
      name: "Education & Prevention",
      val: 85
    },
    {
      name: "Trauma Care for Children",
      val: 52
    },
    {
      name: "Research and Advocacy",
      val: 75
    },
    {
      name: "Fundraising",
      val: 32
    },
    {
      name: "Cluture and Community",
      val: 95
    }
  ]

export default function index() {
  return (
    <div>
      <div className="row custom-money">
        <div className="col-4 mx-4">
          <div className="money-heading">
            <h1 className="display-4 text-success px-5 text-uppercase">
              Where the money goes
            </h1>
          </div>
          <div className="money-para px-5 pt-2">
            <p className="text-primary">
              Current operation and program spending breakdown
            </p>
          </div>

          <div className="money-list px-4 mx-1">
            <ul className="">
              <li>Education and Prevention</li>
              <li>Trauma Care for Children</li>
              <li>Research and Advocacy</li>
              <li>Fundraising</li>
              <li>Cluture and Community</li>
            </ul>
          </div>
          <div className="money-btn px-5">
            <button className="btn btn-warning custom-money-btn">
              Donate Now
            </button>
          </div>
        </div>
        <div className="col-7">


          <div className="main-container d-flex justify-content-around">
            {
              array1.map((data) => {
                return (
                  <div className="money-container">
                    <div className="money" style={{ height: `${data.val}%` }}>
                      <div className="spano">{data.name}</div>
                    </div>
                    <span className="span-per">{data.val}%</span>
                  </div>
                );
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}
