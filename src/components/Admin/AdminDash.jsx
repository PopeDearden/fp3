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
  async componentDidMount () {
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
      labels1.push(this.state.collected[i].date.slice(5,10))
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
            borderColor: 'turquoise',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: data1
          }
        ]
      }
    })
  }

  render(){
    return(
      <div className = "App" >
        <h1>Admin Dash</h1>
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
        }}/>

        </div>
      </div>
    )

  }
}

export default AdminDash;
