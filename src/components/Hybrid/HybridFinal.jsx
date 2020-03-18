import React, { Component } from "react";
import axios from "axios";




class HybridFinal extends Component {
    constructor(s) {
        super()
        this.state = {
            orders: [],
        }
    }
    componentDidMount() {
        this.getFinal()
    }

    getFinal = async () => {
        await axios.get('/api/hybrid/finals').then(res => {
            console.log(res.data)
            this.setState({
                orders: res.data
            })
        })
    }
    render() {
        return (
            <div className="App" >
         
                <div class="General-Content">

                <div class="TableContainer">
                    <div class="Title-Bar"><h2>Unfulfilled Final Orders <i class="fas fa-cart-plus"></i></h2></div>
                    <table class="ConfirmTable">
                        <thead>
                            <tr>
                                <th>
                                    School Name
        </th>
                                <th>
                                    Director Name
        </th>
                                <th>
                                    View/Update
        </th>
                            </tr>
                        </thead>

                        {this.state.orders.map(orders => (
                            <tr id="DataRow">
                                <td>{orders.school_name}</td>
                                <td>{orders.first_name} {orders.last_name}</td>

                                <td id="EditData" onClick={() => this.props.history.push(`/hybridlight/final/${orders.tag}`)}><i class="far fa-edit"></i></td>
                            </tr>
                        ))}
                    </table>
                </div>
                </div>
            </div>
        )

    }
}

export default HybridFinal;
