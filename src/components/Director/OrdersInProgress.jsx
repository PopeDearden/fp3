import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'



class OrdersInProgress extends Component {
  constructor(s) {
    super()
    this.state = {
      totalFlash: 0,
      totalLantern: 0,
      totalYellowFlash: 0,
      totalBlackPuc: 0,
      orders: [],
      totalMoneyNeed: 0,
      possible: 0,
      searchInput2: '',
      searchInput3: '',
      students: [],
    }
  }
  async componentDidMount() {
    await axios.get('/api/director/students').then(res => {
      console.log(res.data)
      this.setState({
        students: res.data
      })
    })
    await axios.get(`/api/director/in-progress`).then(res => {
      console.log(res.data)
      this.setState({
        orders: res.data,
        searchInput: ''
      })
    })
    this.calculateTotal()
  }

  calculateTotal = () => {
    let totalFlash = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalFlash += this.state.orders[i].flashlights
    }
    let totalLantern = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalLantern += this.state.orders[i].pucs
    }
    let totalYellowFlash = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalYellowFlash += this.state.orders[i].flashlight_yellow
    }
    let totalBlackPuc = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalBlackPuc += this.state.orders[i].puc_black
    }
    let totalMoneyNeed = totalLantern * 35 + totalFlash * 30 + totalYellowFlash * 30 + totalBlackPuc * 35
    let possible = totalMoneyNeed / 2
    this.setState({
      totalFlash: totalFlash,
      totalLantern: totalLantern,
      totalYellowFlash: totalYellowFlash,
      totalBlackPuc: totalBlackPuc,
      totalMoneyNeed: totalMoneyNeed.toFixed(2),
      possible: possible.toFixed(2),
    })
  }

  buildTable = (orders, id) => {
   let filtered = orders.filter((element) => {
     return element.user_id === id
   })
   return filtered

  }

  render() {
    const orders2 = this.state.orders.filter((element, index) => {
      return element.last_name.toLowerCase().includes(this.state.searchInput2.toLowerCase())
    })
    const orders1 = orders2.filter((element, index) => {
      return element.first_name.toLowerCase().includes(this.state.searchInput3.toLowerCase())
    })
    const orders = orders1.filter((element, index) => {
      return element.first_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase()) || element.last_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    return (
      <div className="App" >
        <h2 class="Title-Bar-In-Progress"><i class="fas fa-user-edit"></i> Orders in progress for your school :  </h2>
        <div class="TopCards">
          <div class="TopCard2">
            <div class="TopCard1Bar">
              <h2>Total Black <br></br> Flashlights: </h2>
            </div>
            <h3>
              {this.state.totalFlash}
            </h3>
          </div>
          <div class="TopCard2">
            <div class="TopCard1Bar">
              <h2>Total Yellow <br></br>Flashlights: </h2>
            </div>
            <h3>
              {this.state.totalYellowFlash}
            </h3>
          </div>
          <div class="TopCard2">
            <div class="TopCard1Bar">
              <h2>Total Yellow <br></br> Lanterns: </h2>
            </div>
            <h3>
              {this.state.totalLantern}
            </h3>
          </div>
          {/* <div class="TopCard2">
                  <div class="TopCard1Bar">
                      <h2>Total Black <br></br> Lanterns: </h2>
                  </div>
                  <h3>
                      {this.state.totalBlackPuc}
                  </h3>
              </div> */}
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2>Potential Earnings </h2>
            </div>
            <h3>
              ${this.state.possible}
            </h3>
          </div>
          <div class="TopCard1">
            <div class="TopCard1Bar">
              <h2>Total $ to collect</h2>
            </div>
            <h3>
              <h4>${this.state.totalMoneyNeed}</h4>
            </h3>
          </div>
        </div>
        <input class="Search" placeholder={"Search by student first name"} onChange={e => this.setState({ searchInput3: e.target.value })} />    <i class="fas fa-search"></i>
        <input class="Search" placeholder={"Search by student last initial"} onChange={e => this.setState({ searchInput2: e.target.value })} />    <i class="fas fa-search"></i>
        <input class="Search" placeholder={"Search by customer name"} onChange={e => this.setState({ searchInput: e.target.value })} />    <i class="fas fa-search"></i>
        <div class="TableContainer">
          <table class="InProgressTable">
            <tr id="TableHeader">
              <th>Student<br></br>Name</th>
              <th>Customer<br></br></th>
              <th>Contact</th>
              <th>Date Ordered</th>
              <th>Flashlights<br></br>(Black)</th>
              <th>Flashlights<br></br>(Yellow)</th>
              <th>Lanterns<br></br>(Yellow)</th>
              {/* <th>Lanterns<br></br>(Black)</th> */}
              <th>Total Owed</th>
            </tr>
            {/* {this.state.students.map(student =>(
              <tr>
                <td id="DataRow">{student.first_name}</td>
              </tr>
            ))} */}


            {orders.map(orders => (
              <tr id="DataRow" key={orders.order_id}>
                <td>{orders.first_name} {orders.last_name}.</td>
                <td>{orders.first_name_cust}  {orders.last_name_cust}</td>
                <td id="ContactData">{orders.phone_cust}<br></br>{orders.email_cust}</td>
                <td><Moment format="MM/DD/YYYY">{orders.date}</Moment></td>
                <td>{orders.flashlights}</td>
                <td>{orders.flashlight_yellow}</td>
                <td>{orders.pucs}</td>
                {/* <td>{orders.puc_black}</td> */}
                <td id="TotalData">{'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)}   <i class="fas fa-exclamation-triangle"></i></td>

              </tr>
            ))
            }
          </table>
        </div>


      </div>
    )

  }
}

export default OrdersInProgress;
