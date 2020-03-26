import React, { Component } from "react";
import axios from "axios";




class DirectorDash extends Component {
  constructor(s) {
    super()
    this.state = {
      remaining: {},

    }
  }
  componentDidMount () {
    this.getRemaining()
  }
getRemaining = () => {
  axios.get('/api/director/remaining').then(res => {
    this.setState({
      remaining: res.data[0]
    })
  })
}

  render() {
    return (
      <div className="App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Director Dashboard</h2>
          </div>
            <div className="A-Box">
              <h2>Remaining Samples</h2>
              <p>
                Black flashlights: {this.state.remaining.remaining_black_flash}
                </p>
                <p>
                  Yellow flashlights: {this.state.remaining.remaining_yellow_flash}
                </p>
                <p>
                  Yellow lanterns: {this.state.remaining.remaining_yellow_puc}
                </p>
            </div>

        </div>
      </div>
    )

  }
}

export default DirectorDash;
