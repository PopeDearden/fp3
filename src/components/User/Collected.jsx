import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'



class Collected extends Component {
    constructor(s) {
        super()
        this.state = {
            totalFlash: 0,
            totalLantern: 0,
            orders: [],
            totalMoneyNeed: 0,
            possible: 0
        }
    }
    async componentDidMount() {
        await axios.get(`/api/student/collected`).then(res => {
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
        this.setState({
            totalFlash: totalFlash
        })
        let totalLantern = 0
        for (let i = 0; i < this.state.orders.length; i++) {
            totalLantern += this.state.orders[i].pucs
        }
        let totalMoneyNeed = totalLantern * 35 + totalFlash * 30
        let possible = totalMoneyNeed / 2
        this.setState({
            totalLantern: totalLantern,
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
                <h2 class="Title-Bar-Collected"><i class="fas fa-money-check-alt"></i>   Orders w/ money collected  </h2>
                <div class="TopCards">
                <div class="TopCard1">
                    <div class="TopCard1Bar">
                        <h2>Total Flashlights: </h2>
                    </div>
                    <h3>
                        {this.state.totalFlash}
                    </h3>
                </div>
                <div class="TopCard1">
                    <div class="TopCard1Bar">
                        <h2>Total Lanterns: </h2>
                    </div>
                    <h3>
                        {this.state.totalLantern}
                    </h3>
                </div>
                <div class="TopCard1">
                    <div class="TopCard1Bar">
                        <h2>Your projected earnings </h2>
                    </div>
                    <h3>
                        ${this.state.possible}
                    </h3>
                </div>
                <div class="TopCard1">
                    <div class="TopCard1Bar">
                        <h2>Total collected</h2>
                    </div>
                    <h3>
                        <h4 id="CollectedCard">${this.state.totalMoneyNeed}</h4>
                    </h3>
                </div>
                </div>
                <input class="Search" placeholder={"Search by name"}  onChange={e => this.setState({ searchInput: e.target.value })}/>    <i class="fas fa-search"></i> Orders confirmed should represent orders that you have received payment for.
                <div class="TableContainer">
                <table class="InProgressTable">
                    <tr id="TableHeader">
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Date Ordered</th>
                        <th>Flashlights</th>
                        <th>Lanterns</th>
                        <th>Total Collected</th>
                        <th>Edit</th>
                    </tr>
                    {orders.map(orders => (

                        <tr id="DataRow" key={orders.order_id}>
                            <td>{orders.first_name_cust}  {orders.last_name_cust}</td>
                            <td>{orders.address_cust}</td>
                            <td id="ContactData">{orders.phone_cust}<br></br>{orders.email_cust}</td>
                            <td><Moment format="MM/DD/YYYY">{orders.date}</Moment></td>
                            <td>{orders.flashlights}</td>
                            <td>{orders.pucs}</td>
                            <td id="TotalCollected">{'$' + (orders.flashlights * 30 + orders.pucs * 35)}   <i class="fas fa-hand-holding-usd"></i></td>
                            <td id="EditData"><i onClick={()=>this.props.history.push(`/user/edit-order/${orders.order_id}`)}class="fas fa-pencil-alt"></i></td>
                        </tr>
                    ))

                    }
                </table>
                </div>


            </div>
        )

    }
}

export default Collected;
