import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'



class InProgress extends Component {
    constructor(s) {
        super()
        this.state = {
            totalFlash: 0,
            totalLantern: 0,
            totalYellowFlash: 0,
            totalBlackPuc: 0,
            orders: [],
            totalMoneyNeed: 0,
            possible: 0
        }
    }
    async componentDidMount() {
        await axios.get(`/api/student/in-progress`).then(res => {
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

    render() {
        const orders = this.state.orders.filter((element, index) => {
            return element.first_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase()) || element.last_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })
        return (
            <div className="App" >
                <h2 class="Title-Bar-In-Progress"><i class="fas fa-user-edit"></i> Orders in progress:  </h2>
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
                <div className="TextContainer">
                    <input class="Search" placeholder={"Search by name"} onChange={e => this.setState({ searchInput: e.target.value })} />    <i class="fas fa-search"></i>Orders In Progress are considered "draft" and are not valid until you have collected the funds and updated the order!
                </div>
                <div className="TextContainer2">
                    <p>
                        Orders In Progress are considered "draft" and are not valid until you have collected the funds and updated the order!
                </p>
                    <div>
                        <input class="Search" placeholder={"Search by name"} onChange={e => this.setState({ searchInput: e.target.value })} />
                        <i class="fas fa-search"></i>
                    </div>
                    <p>Slide the table left and right to view all order information. Tap the pencil on the far right to edit an order.</p>
                </div>
                <div class="TableContainer">
                    <table class="InProgressTable">
                        <tr id="TableHeader">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Date Ordered</th>
                            <th>Flashlights<br></br>(Black)</th>
                            <th>Flashlights<br></br>(Yellow)</th>
                            <th>Lanterns<br></br>(Yellow)</th>
                            {/* <th>Lanterns<br></br>(Black)</th> */}
                            <th>Total Owed</th>
                            <th>Edit</th>
                        </tr>
                        {orders.map(orders => (

                            <tr id="DataRow" key={orders.order_id}>
                                <td>{orders.first_name_cust}  {orders.last_name_cust}</td>
                                <td>{orders.address_cust}</td>
                                <td id="ContactData">{orders.phone_cust}<br></br>{orders.email_cust}</td>
                                <td><Moment format="MM/DD/YYYY">{orders.date}</Moment></td>
                                <td>{orders.flashlights}</td>
                                <td>{orders.flashlight_yellow}</td>
                                <td>{orders.pucs}</td>
                                {/* <td>{orders.puc_black}</td> */}
                                <td id="TotalData">{'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)}   <i class="fas fa-exclamation-triangle"></i></td>
                                <td id="EditData"><i onClick={() => this.props.history.push(`/user/edit-order/${orders.order_id}`)} class="fas fa-pencil-alt"></i></td>
                            </tr>
                        ))

                        }
                    </table>
                </div>
                <div className="Footer"></div>
            </div>
        )

    }
}

export default InProgress;
