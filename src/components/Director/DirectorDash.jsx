import React, { Component } from "react";
import axios from "axios";




class DirectorDash extends Component {
  constructor(s) {
    super()
    this.state = {
      remaining: {},
      director: {},
    }
  }
  componentDidMount() {
    this.getRemaining()
    this.getSamples()
  }
  getRemaining = async () => {
    await axios.get('/api/director/remaining').then(res => {
      this.setState({
        remaining: res.data[0]
      })
    })
  }
  getSamples = async () => {
    await axios.get('/api/director/samples').then(res => {
      this.setState({
        director: res.data.samples[0]
      })
    })
  }

  tOrF = (check) => {
    if (check === true) {
      return (
        <i id="good" class="fas fa-check"></i>
        // <div>...in progress</div>
      //  <div></div>
        )
      }
      else {
        return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Director Dashboard</h2>
          </div>
          <div class="Split">

            <div className="A-Box">
              <h2>Remaining Samples</h2>
              <div className="B-Box">
                <p>
                  Black flashlights: <b id="bold">{this.state.remaining.remaining_black_flash}</b>
                </p>
                <p>
                  Yellow flashlights:  <b id="bold">{this.state.remaining.remaining_yellow_flash}</b>
                </p>
                <p>
                  Yellow lanterns:  <b id="bold">{this.state.remaining.remaining_yellow_puc}</b>
                </p>
              </div>
            </div>
            <div className="A-Box2">
              <h2>Other Info</h2>
              <div className="B-Box">
                <p> Sample Order Sent by HybridLight: {this.tOrF(this.state.director.sample_processed)} </p>
               
       
              </div>
            </div>
          </div>

        </div>
      </div>
    )

  }
}

export default DirectorDash;
