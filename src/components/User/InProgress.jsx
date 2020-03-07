import React, { Component } from "react";
import axios from "axios";




class InProgress extends Component {
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
       await axios.get(`/api/student/in-progress`).then(res => {
            console.log(res.data)
            this.setState({
                orders: res.data
            })
        })
        this.calculateTotal()
    }

    calculateTotal = () =>{
        let totalFlash = 0
        for (let i = 0; i < this.state.orders.length; i++){
            totalFlash += this.state.orders[i].flashlights
        }
        this.setState({
            totalFlash: totalFlash
        })
        let totalLantern = 0
        for (let i = 0; i < this.state.orders.length; i++){
            totalLantern += this.state.orders[i].pucs
        }
        let totalMoneyNeed = totalLantern*35 + totalFlash*30
        let possible = totalMoneyNeed/2
        this.setState({
            totalLantern: totalLantern,
            totalMoneyNeed: totalMoneyNeed,
            possible: possible,
        })

    }
    
    render() {
        return (
            <div className="App" >
                <h1>Total Flashlights: {this.state.totalFlash}</h1>
                <h1>Total Flashlights: {this.state.totalLantern}</h1>
                <h1>Total Money Needed to Collect: ${this.state.totalMoneyNeed}</h1>
                <h1>Total Money Needed to Collect: ${this.state.possible}</h1>
                <table class="InProgressTable">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date Ordered</th>
                        <th>Flashlights</th>
                        <th>Lanterns</th>
                        <th>Total Owed</th>
                    </tr>
                    {this.state.orders.map(orders => (
                        
                            <tr key={orders.order_id}>
                                <th>{orders.first_name_cust}</th>
                                <th>{orders.last_name_cust}</th>
                                <th>{orders.address_cust}</th>
                                <th>{orders.phone_cust}</th>
                                <th>{orders.email_cust}</th>
                                <th>{orders.date}</th>
                                <th>{orders.flashlights}</th>
                                <th>{orders.pucs}</th>
                                <th>{'$'+(orders.flashlights*30 + orders.pucs*35)}</th>
                            </tr>
                    ))

                    }
                </table>
                <h2>Student Orders In Progress</h2>


            </div>
        )

    }
}

export default InProgress;
