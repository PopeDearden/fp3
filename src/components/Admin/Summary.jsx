import React, { Component } from "react";




class Summary extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Director Summary</h2>
          </div>
          <div className="Split">
            <div className="A-Box2">
              <h2>Samples</h2>
              <br></br>
              <ol>
                <li>Total (black flashlights, yellow flashlights, yellow lanterns) in Progress</li>
                <li>Total (black flashlights, yellow flashlights, yellow lanterns) orders collected</li>
                <li>Total (black flashlights, yellow flashlights, yellow lanterns) orders confirmed</li>
                <li>Total student accounts</li>
              </ol>
            </div>
            <div className="A-Box2">
              <h2>Samples</h2>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Summary;
