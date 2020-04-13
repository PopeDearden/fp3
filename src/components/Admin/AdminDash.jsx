import React, { Component } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2'
import Moment from 'react-moment'
import { withRouter } from "react-router-dom";


class AdminDash extends Component {
  constructor(s) {
    super()
    this.state = {
      data: [],

    }
  }
  async componentDidMount() {
    await this.getCollectedTotal()
    this.prepareCollected()
  }

  getCollectedTotal = async () => {
    await axios.get('/api/admin/collectedTotals').then(res => {
      console.log(res.data)
      this.setState({
        collected: res.data
      })
    })
  }

  prepareCollected = () => {
    const labels1 = []
    const data1 = []
    for (let i = 0; i < this.state.collected.length; i++) {
      console.log(this.state.collected[i].sum)
      labels1.push(this.state.collected[i].date.slice(5, 10))
      data1.push(this.state.collected[i].sum)
    }
    this.setState({
      data: {
        labels: labels1,
        scaleLabel: {
          fontColor: '#fff',
        },
        datasets: [
          {
            label: '# of products sold by date',
            chartColors: ['white'],
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'turquoise',
            borderColor: 'rgb(3, 53, 82)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'turquoise',
            pointBackgroundColor: 'rgb(3, 53, 82)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'turquoise',
            pointHoverBorderColor: 'turquoise',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: data1
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="General-Content">
          <div className="Title-Bar">
            <h2>Admin Dashboard</h2>
          </div>
          <div className="Split">
            <div className="A-Box2">
              <h2>Features coming soon/planned</h2>
              <div className="B-Box">
                <br></br>
                <h3>Director Summary Board</h3>
                <p id="smallp">This will show an encompassing summary of individual schools, like total products sold, how many students are registered.</p>
                <br></br>
                <h3>Director Archiving</h3>
                <p id="smallp">Admins will be able to "Archive" old director accounts along with all their student accounts once they have completed the fundraiser.</p>
                <h3>Dashboard bar chart</h3>
                <p id="smallp">This chart will show appear on this page, showing directors on the x-axis and total products sold on the y-axis</p>
                <br></br>
              </div>
            </div>
            <div class="TestChart">
              <Line
                data={this.state.data}
                options={{
                  title: {
                    display: true,
                    text: 'Total Products Sold by Date',
                    fontSize: 20
                  },
                  legend: {
                    display: false,
                    position: 'top'
                  }
                }} />
              <div className="A-Box2">
                <h3>Additional info</h3>
                <p id="smallp">This chart displays dates from the previous 30 days, but only shows dates in which orders were placed. If no orders were placed on that date, then it will not appear.</p>
              </div>
            </div>
          </div>
          {/* <div className="C-Box">

          </div> */}
        </div>
      </div>
    )

  }
}

export default AdminDash;
