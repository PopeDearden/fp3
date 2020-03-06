import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'




class DirectorHeader extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }

logout = () => {
    axios.get('/api/logout').then(res=> {
        Swal.fire('Logged Out')
        this.props.history.push('/')
    })
}


    render() {



        return (

            <div class="Header">
                     <div class="Animate-Lines" onClick={()=>this.props.history.push('/director/dash')}>
                    <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1>
                    <div class="Animate-Lines__horizontal"></div>
                    <div class="Animate-Lines__vertical"></div>
                </div>
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/create-user')}>
                    <p>Create Student Account</p>
                <i class="fas fa-user-plus"></i>

                </div>
                {/* <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
                    <i class="fas fa-user-plus"></i>
                    <p>Create Student<br></br> Account</p>
                </div> */}
       
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/in-progress')}>
                    <p>Orders in Progress</p>
                    <i class="fas fa-user-edit"></i>
                </div>
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/collected')}>
                    <p>Orders Collected</p>

                    <i class="fas fa-money-check-alt"></i>
                </div>
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/confirmed')}>
                    <p>Orders Confirmed</p>

                    <i class="fas fa-comments-dollar"></i>
                </div>
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/place-order')}>
                    <p> Finalize and send<br></br> complete order</p>

                    <i class="far fa-envelope"></i>
                </div>
                <div class="Header-Link" onClick={()=>this.props.history.push('/director/user-info-list')}>
                    <p>All student<br></br>account info</p>
                    <i class="fas fa-users"></i>
                </div>
                <div class="Header-Link" onClick={()=>this.logout()}>
                    <p>Logout</p>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        )
    }

}

export default withRouter(DirectorHeader);
