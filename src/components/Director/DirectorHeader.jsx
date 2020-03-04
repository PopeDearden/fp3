import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'




class DirectorHeader extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }




    render() {



        return (

            <div class="Header">
                <div class="Welcome">
                    {/* <h1 id="Fancy-Title-2-white">Welcome, {this.props.first_name} {this.props.last_name}</h1> */}
                    <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1>
                </div>
                <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
                    <p>Create Student<br></br> Account</p>
                    <i class="fas fa-user-plus"></i>
                </div>
                {/* <div class="Divider"></div> */}
                <div class="Note-Yellow" onClick={()=>this.props.history.push('/director/in-progress')}>
                    <p>Orders in Progress</p>

                    <i class="fas fa-user-edit"></i>
                </div>
                <div class="Note-Green">
                    <p>Orders Collected</p>

                    <i class="fas fa-money-check-alt"></i>
                </div>
                <div class="Note-Purple">
                    <p>Orders Confirmed</p>

                    <i class="fas fa-comments-dollar"></i>
                </div>
                <div class="Envelope">
                    <p> Finalize and send<br></br> complete order</p>

                    <i class="far fa-envelope"></i>
                </div>
                <div class="All-Users">
                    <p>All student<br></br>account info</p>
                    <i class="fas fa-users"></i>
                </div>
            </div>
        )
    }

}

export default withRouter(DirectorHeader);
