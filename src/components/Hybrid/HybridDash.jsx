import React, { Component } from "react";
import axios from "axios";




class HybridDash extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Hybridlight Dashboard</h2>
          </div>
          <div className="Split">

            <div className="A-Box2">
              <h2>Welcome, HybridLight!</h2>
              <div className="B-Box">
                <p>If you have any questions on the functionality of this app, or have any suggestions please contact:</p>
                <br></br>
                <h3>Taylor Dearden</h3>
                <br></br>
                <p>(Text) 801-425-4122</p>
                <p>taylordearden@gmail.com</p>
              </div>
            </div>
            <div className="A-Box2">
              <h2>App info:</h2>
              <div className="B-Box">
                <br></br>
                <h3>Requested Samples</h3>
                <p id="smallp">This tab contains a table displaying newly added schools that Scott Hosking has registered to do the fundraiser. You can select view/update to view all the information you will need to fulfill this order. When the order is fulfilled, click "Mark as fulfilled". Then paste in a url link to a pdf invoice for the school.</p>
                <br></br>
                <h3>Final Orders</h3>
                <p id="smallp">This tab contains a table displaying final orders sent by schools after they have completed their fundraiser. Similar to the requested samples tab, you select view/update to view the relevant information you will need to fulfill this order. When you click "Mark as fulfilled" and paste a NEW url to your final invoice, it will replace the old invoice in the system with the new one.</p>
                <br></br>
                <h3>Invoices Sent</h3>
                <p id="smallp">This tab contains a table displaying all invoices you have sent to schools. It will always link to the most recent invoice sent.</p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default HybridDash;
