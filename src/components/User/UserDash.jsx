import React, { Component } from "react";
import axios from "axios";




class UserDash extends Component {
  constructor(s) {
    super()
    this.state = {
      totalOrdersInProgress: 0,
      totalMoneyC: 0,
      collectedOrdersTotal: 0,
      possible: 0,
      earnedC: 0,
      possibleToEarn: 0,
      sample_light_black: 0,
      sample_light_yellow: 0,
      sample_puc_yellow: 0,
      sample_puc_black: 0,
      username: '',
      confirmed: '',
    }
  }
  async componentDidMount() {
    await this.getStage()
    await axios.get(`/api/student/in-progress`).then(res => {
      console.log(res.data)
      this.setState({
        inProgressOrders: res.data,

      })
    })
    await axios.get(`/api/student/collected`).then(res => {
      console.log(res.data)
      this.setState({
        collectedOrders: res.data,
        searchInput: ''
      })
    })
    await axios.get('/api/samples').then(res => {
      this.setState({
        sample_puc_yellow: res.data[0].sample_puc_yellow,
        sample_puc_black: res.data[0].sample_puc_black,
        sample_light_black: res.data[0].sample_light_black,
        sample_light_yellow: res.data[0].sample_light_yellow,
        username: res.data[0].username,
        name: res.data[0].first_name + ' ' + res.data[0].last_name
      })
    }
    )
    //calculateTotal is for in progress
    await this.calculateTotalCollected()
    await this.calculateTotal()
  }
  getStage = () => {
    axios.get('/api/student/stage').then(res => {
      this.setState({
        confirmed: res.data
      })
    })
  }
  calculateTotalCollected() {
    let totalFlash = 0
    let collectedOrdersTotal = this.state.collectedOrders.length
    for (let i = 0; i < this.state.collectedOrders.length; i++) {
      totalFlash += this.state.collectedOrders[i].flashlights
    }
    this.setState({
      totalFlash: totalFlash
    })
    let totalLantern = 0
    for (let i = 0; i < this.state.collectedOrders.length; i++) {
      totalLantern += this.state.collectedOrders[i].pucs
    }
    let totalYellowFlash = 0
    for (let i = 0; i < this.state.collectedOrders.length; i++) {
      totalYellowFlash += this.state.collectedOrders[i].flashlight_yellow
    }
    let totalMoney = totalLantern * 35 + totalFlash * 30 + totalYellowFlash * 30
    let earned = totalMoney / 2
    this.setState({
      totalLanternC: totalLantern,
      totalMoneyC: totalMoney.toFixed(2),
      earnedC: earned.toFixed(2),
      collectedOrdersTotal: collectedOrdersTotal
    })

  }
  calculateTotal = () => {
    let totalFlash = 0
    let totalOrdersInProgress = this.state.inProgressOrders.length
    for (let i = 0; i < this.state.inProgressOrders.length; i++) {
      totalFlash += this.state.inProgressOrders[i].flashlights
    }
    this.setState({
      totalFlash: totalFlash
    })
    let totalLantern = 0
    for (let i = 0; i < this.state.inProgressOrders.length; i++) {
      totalLantern += this.state.inProgressOrders[i].pucs
    }
    let totalYellowFlash = 0
    for (let i = 0; i < this.state.inProgressOrders.length; i++) {
      totalYellowFlash += this.state.inProgressOrders[i].flashlight_yellow
    }
    let totalMoneyNeed = totalLantern * 35 + totalFlash * 30 + totalYellowFlash * 30
    let possible = totalMoneyNeed / 2
    let earnedPotential = +this.state.earnedC + possible
    this.setState({
      totalLantern: totalLantern,
      totalMoneyNeed: totalMoneyNeed.toFixed(2),
      possible: possible.toFixed(2),
      totalOrdersInProgress: +totalOrdersInProgress,
      possibleToEarn: earnedPotential.toFixed(2)
    })
  }



  render() {
    function sampleTotal(light, puc) {
      let total = light * 15 + puc * (35 / 2)
      return total.toFixed(2)
    }
    if (this.state.confirmed === false) {

      return (
        <div className="General-Content" >
          <div className="Title-Bar"><h2>Student Dashboard: Welcome {this.state.name}!</h2></div>
          <div className="TopCards">
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h2>Total orders in progress: </h2>
              </div>
              <h3>
                {this.state.totalOrdersInProgress}
              </h3>
            </div>
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h2>Total Orders w/ Money Collected</h2>
              </div>
              <h3>
                {this.state.collectedOrdersTotal}
              </h3>
            </div>
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h2>Current Earnings</h2>
              </div>
              <h3 id="CollectedCard">
                ${this.state.earnedC}
              </h3>
            </div>
          </div>
          <div class="TopCards">
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h2 >Total $ to be collected</h2>
              </div>
              <h3>
                <h4>
                  ${this.state.totalMoneyNeed}<i class="fas fa-exclamation-triangle"></i>
                </h4>
              </h3>
            </div>
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h2>Total money collected </h2>
              </div>
              <h3 id="CollectedCard">
                ${this.state.totalMoneyC}
              </h3>
            </div>
            <div class="TopCard3">
              <div class="TopCard1Bar">
                <h1> Possible total earnings after "In progress" $ collected</h1>
              </div>
              <h3 id="CollectedCard">
                <h4>
                  ${this.state.possibleToEarn}
                </h4>
              </h3>
            </div>
          </div>
          <div className="Split">

            <div className="A-Box">
              <h2>Our records show that you have been given:</h2>
              <br></br>
              <table className="Finalize">
                <tr>
                  <th>
                    Black Flashlight
                </th>
                  <th>
                    Yellow Flashlight
                </th>
                  <th>
                    Yellow Lantern
                </th>
                </tr>
                <tr>
                  <td id="white">
                    {this.state.sample_light_black}
                  </td>
                  <td id="white">
                    {this.state.sample_light_yellow}
                  </td>
                  <td id="white">
                    {this.state.sample_puc_yellow}
                  </td>
                </tr>
                <tr>
                  <td id="white">
                    $15.00 ea.
                </td>
                  <td id="white">
                    $15.00 ea.
                </td>
                  <td id="white">
                    $17.50 ea.
                </td>
                </tr>
              </table>
              <p id="smallp">(These prices are student prices, not customer prices!)</p>
            </div>
            <br></br>
            <div className="A-Box">
              <p>
                You are responsible for payment of ${sampleTotal(this.state.sample_light_black, this.state.sample_puc_yellow)} at the end of the fundraiser deadline. This will be subtracted from your total earnings.
          </p>

            </div>
          </div>
          <div className="Footer"></div>
        </div>
      )
    }
    if (this.state.confirmed === true) {
      return (
        <div className="App">
          <div className="Title-Bar">
            <h2>Your orders were confirmed!</h2>
          </div>
          <div class="Split">
            <br></br>
            <div class="A-Box2">
              <h2>Please review <br></br>"Your Final Orders"</h2>
              <p>If there are any errors, contact your director and have them "Un-Confirm" your orders so you can make corrections. </p>

            </div>
            <br></br>
            <div class="A-Box2">
              <h2>Other<br></br>Information</h2>
              <p>Your director will not be able to "Un-confirm" any orders once they have placed the final order for your school.</p>
            </div>
          </div>
        </div>


      )
    }
    else {
      return (

        <div className="Title-Bar-Dash">
          <h2>Loading...</h2>
        </div>


      )
    }
  }
}

export default UserDash;
