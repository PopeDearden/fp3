import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'



class InvoiceHistory extends Component {
    constructor(s) {
        super()
        this.state = {
            invoices: [],
        }
    }
    componentDidMount() {
        this.getInvoices()
    }

    getInvoices = async () => {
        await axios.get('/api/hybrid/invoices').then(res => {
            this.setState({
                invoices: res.data
            })

        })
        console.log(this.state.invoices)
    }
    render() {
        return (
            <div className="App" >
                <div class="General-Content">
                    <div class="TableContainer">
                        <div class="Title-Bar"><h2>Invoices Sent</h2></div>
                    <table class="ConfirmTable">
                        <thead>
                            <tr>
                                <th>School Name</th>
                                <th>Date Sent</th>
                                <th>Invoice Url Link</th>
                            </tr>
                        </thead>
                        {this.state.invoices.map(invoice => (
                            <tr id="DataRow">
                                <td>{invoice.school_name}</td>
                                <td><Moment format="MM/DD/YYY">{invoice.date}</Moment></td>
                                <td id="EditData"><a target="_blank" href={invoice.url}><i class="fas fa-file-invoice-dollar">  Invoice</i></a></td>
                                
                            </tr>
                        
                        ))}
                    </table>
                    </div>
                </div>
            </div>
        )

    }
}

export default InvoiceHistory;
