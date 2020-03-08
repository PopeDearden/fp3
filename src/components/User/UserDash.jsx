import React, { Component } from "react";
import axios from "axios";




class UserDash extends Component {
  constructor(s) {
    super()
    this.state = {
      totalOrdersInProgress: 0,
      moneyCollected: 456

    }
  }
  async componentDidMount() {
    await axios.get(`/api/student/in-progress`).then(res => {
      console.log(res.data)
      this.setState({
        inProgressOrders: res.data,

      })
    })
    this.calculateTotal()
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
    let totalMoneyNeed = totalLantern * 35 + totalFlash * 30
    let possible = totalMoneyNeed / 2
    this.setState({
      totalLantern: totalLantern,
      totalMoneyNeed: totalMoneyNeed.toFixed(2),
      possible: possible.toFixed(2),
      totalOrdersInProgress: +totalOrdersInProgress,
    })

  }



  render() {
    return (
      <div className="App" >
        <div className="Title-Bar-Dash"><h2>Student Dashboard</h2></div>
        <div className="TopCards">
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2>Total orders in progress: </h2>
            </div>
            <h3>
              {this.state.totalOrdersInProgress}
            </h3>
          </div>
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2 >Total $ to be collected</h2>
            </div>
            <h3>
              <h4>
                ${this.state.totalMoneyNeed}
              </h4>
            </h3>
          </div>
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2>Total orders collected</h2>
            </div>
            <h3>
              1234
          </h3>
          </div>
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2>Total money collected </h2>
            </div>
            <h3 id="CollectedCard">
              $1234.00
          </h3>
          </div>
        </div>
      </div>
    )

  }
}

export default UserDash;
