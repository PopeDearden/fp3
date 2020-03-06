import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'




class StudentHeader extends Component {
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
                <div class="Animate-Lines" onClick={() => this.props.history.push('/user/')}>
                    <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1>
                    <div class="Animate-Lines__horizontal"></div>
                    <div class="Animate-Lines__vertical"></div>
                </div>
                <div class="Header-Link" onClick={() => this.props.history.push('/user/create-order')}>
                    <p>Create a new order</p>
                    <i class="fas fa-user-plus"></i>

                </div>
                {/* <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
                    <i class="fas fa-user-plus"></i>
                    <p>Create Student<br></br> Account</p>
                </div> */}

                <div class="Header-Link" onClick={() => this.props.history.push('/director/in-progress')}>
                    <p>Orders in Progress</p>
                    <i class="fas fa-user-edit"></i>
                </div>
                <div class="Header-Link" onClick={() => this.props.history.push('/director/collected')}>
                    <p>Orders w/ money collected</p>

                    <i class="fas fa-money-check-alt"></i>
                </div>
                <div class="Header-Link" onClick={() => this.props.history.push('/director/confirmed')}>
                    <p>Orders Confirmed by<br></br>your director</p>

                    <i class="fas fa-comments-dollar"></i>
                </div>

            </div>
        )
    }

}

export default withRouter(StudentHeader);
