import React, { Component } from "react";
import axios from "axios";




class Summary extends Component {
  constructor(s) {
    super()
    this.state = {
      collected: {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      },
      in_progress: {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      },
      confirmed: {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      }
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios.put(`/api/admin/get-summaries/${this.props.match.params.id}`).then(res => {
      console.log(res.data)

      const collected = res.data.collected[0] === undefined ? {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      } : res.data.collected[0]
      let confirmed = res.data.confirmed[0] === undefined ? {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      } : res.data.confirmed[0]
      let in_progress = res.data.in_progress[0] === undefined ? {
        "school_name": "",
        "director_tag": "",
        "black_flashlights": "0",
        "yellow_pucs": "0",
        "yellow_flashlights": "0"
      } : res.data.in_progress[0]

      this.setState({
        collected: collected,
        confirmed: confirmed,
        in_progress: in_progress
      })
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Summary for {this.state.collected.school_name}</h2>
          </div>
          <div>

          </div>
          <div className="Split">
            <div className="A-Box2">
              <table className="Finalize" id="white">
                <tr>
                  <th>
                    Products
                </th>
                  <th>
                    In Progress
                </th>
                  <th>
                    Collected
                </th>
                  <th>
                    Confirmed
                </th>
                </tr>
                <tr>
                  <td id="white">
                    Black Flashlights
                </td>
                  <td id="white">
                    {this.state.in_progress.black_flashlights}
                  </td>
                  <td id="white">
                    {this.state.collected.black_flashlights}
                  </td>
                  <td id="white">
                    {this.state.confirmed.black_flashlights}
                  </td>
                </tr>
                <tr>
                  <td id="white">
                    Yellow Flashlights
                </td>
                  <td id="white">
                    {this.state.in_progress.yellow_flashlights}
                  </td>
                  <td id="white">
                    {this.state.collected.yellow_flashlights}
                  </td>
                  <td id="white">
                    {this.state.confirmed.yellow_flashlights}
                  </td>
                </tr>
                <tr>
                  <td id="white">
                    Yellow Lanterns
                </td>
                  <td id="white">
                    {this.state.in_progress.yellow_pucs}
                  </td>
                  <td id="white">
                    {this.state.collected.yellow_pucs}
                  </td>
                  <td id="white">
                    {this.state.confirmed.yellow_pucs}
                  </td>
                </tr>
              </table>
            </div>
            <div className="A-Box2">
              <h2>Other Information</h2>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Summary;
