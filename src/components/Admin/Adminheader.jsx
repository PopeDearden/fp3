import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'



class AdminHeader extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }

    logout = () => {
        axios.get('/api/logout').then(res => {
            Swal.fire('Logged Out')
            this.props.history.push('/')
        })
    }



    render() {



        return (

            <div class="Header">
                <div class="Animate-Lines" onClick={() => this.props.history.push('/admin/')}>
                    <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1>
                    <div class="Animate-Lines__horizontal"></div>
                    <div class="Animate-Lines__vertical"></div>
                </div>
                <div class="Header-Link" onClick={() => this.props.history.push('/admin/create-director')}>
                    <p>Create a new school/director</p>
                    <i class="fas fa-chalkboard-teacher"></i>

                </div>
                <div class="Header-Link" onClick={() => this.props.history.push('/admin/directors')}>
                    <p>All Director<br></br> Account Info</p>
                    <i class="fas fa-users"></i>

                </div>
                <a id="linkchange" href="https://trello.com/b/twXHHono" target="_blank">
                    <div class="Header-Link">
                        <p>Referral Manager</p>
                        <i class="far fa-id-badge"></i>

                    </div>
                </a>
                <div class="Header-Link" onClick={() => this.props.history.push('/admin/invoice')}>
                    <p>Invoice History</p>
                    <i class="fas fa-file-invoice-dollar"></i>

                </div>
                {/* <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
                    <i class="fas fa-user-plus"></i>
                    <p>Create Student<br></br> Account</p>
                </div> */}


                <div class="Header-Link" onClick={() => this.logout()}>
                    <p>Logout</p>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        )
    }

}

export default withRouter(AdminHeader);
