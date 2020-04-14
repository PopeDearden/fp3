import React, { Component } from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2'



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
      },
      info: {

      },
      remaining: {

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
        in_progress: in_progress,
        info: res.data.info[0],
        remaining: res.data.remaining[0]
      })
    })
  }
  render() {
    let barData = {
      labels: ['Black Flashlights', 'Yellow Flashlights', 'Yellow Lanterns'],
      datasets: [
        {
          label: 'In Progress',
          backgroundColor: 'rgba(75,500,600,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [this.state.in_progress.black_flashlights, this.state.in_progress.yellow_flashlights, this.state.in_progress.yellow_pucs]
        },
        {
          label: 'Collected',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [this.state.collected.black_flashlights, this.state.collected.yellow_flashlights, this.state.collected.yellow_pucs]
        },
        {
          label: 'Confirmed',
          backgroundColor: 'rgba(75,150,992,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [this.state.confirmed.black_flashlights, this.state.confirmed.yellow_flashlights, this.state.confirmed.yellow_pucs]
        },

      ],
    }
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
              <h2>Student Order's Progress</h2>
              <br></br>
              <table className="Finalize" id="white">
                <tr>
                  <th>
                    Product
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
              <h2>Samples</h2>
              <br></br>
              <table className="Finalize">
                <tr>
                  <th>
                    Product
                  </th>
                  <th>
                    Total <br></br>Samples
                  </th>
                  <th>
                   Given to<br></br> Students
                  </th>
                  <th>
                    Remaining
                  </th>
                </tr>
                <tr>
                  <td id="white">
                  Black Flashlights
                  </td>
                  <td id="white">
                    {this.state.info.black_flash_sample}
                  </td>
                  <td id="white">
                    {this.state.info.black_flash_sample - this.state.remaining.remaining_black_flash}
                  </td>
                  <td id="white">
                    {this.state.remaining.remaining_black_flash}
                  </td>
                </tr>
                <tr>
                  <td id="white">
                  Yellow Flashlights
                  </td>
                  <td id="white">
                    {this.state.info.yellow_flash_sample}
                  </td>
                  <td id="white">
                    {this.state.info.yellow_flash_sample - this.state.remaining.remaining_yellow_flash}
                  </td>
                  <td id="white">
                    {this.state.remaining.remaining_yellow_flash}
                  </td>
                </tr>
                <tr>
                  <td id="white">
                  Yellow Lanterns
                  </td>
                  <td id="white">
                    {this.state.info.yellow_puc_sample}
                  </td>
                  <td id="white">
                    {this.state.info.yellow_puc_sample - this.state.remaining.remaining_yellow_puc}
                  </td>
                  <td id="white">
                    {this.state.remaining.remaining_yellow_puc}
                  </td>
                </tr>
              </table>
            </div>
            <div className="A-Box3">
                <h2>Product Statuses</h2>
                {/* <br></br> */}
              <div className="BarChart">
                <Bar
                  height="300px"
                  width="600px"
                  data={barData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Summary;
