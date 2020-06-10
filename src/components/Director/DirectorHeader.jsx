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
            stage: '',
            menu: false,
        }
    }

    componentDidMount() {
        this.getInfo()
    }

    logout = () => {
        axios.get('/api/logout').then(res => {
            Swal.fire('Logged Out')
            this.props.history.push('/')
        })
    }
    getInfo = async () => {
        await axios.get('/api/director/info').then(res => {
            this.setState({
                stage: res.data[0].stage
            })
        })
        console.log(this.state.stage)
    }
    hitLink = async (path) => {
        await this.setState(prevState => ({
            menu: !prevState.menu
        }))
        this.props.history.push(path)
    }


    render() {
        if (this.state.stage === 'registered') {
            return (
                <div class="Header">
                    <div class="Header-Menu">
                        <div class="Split2">
                        <img id="Icon3" src="https://lh3.googleusercontent.com/FSJw-4kp3OzpqqfvlCwHai1eO604ZVDMP5nl2BsY3B_lX7WOGQItJQGnyliCFcXBfKZIpfhNh2aUYjLhqv39AVczFVOP2FedJf50WmWchF0ofKsHVhmhcFsA1JUx5vGICMnftmv4iMlBww88qZOqPQN0Ol-I5a1rZm4Uke8QVRqAv1VimOXzGGnT1hLMqfk5ertOe5kl-1gLiIYnhe8oXIk9iuc5GIIiviyAhIYcolapPcRH0V2zvH5ZW6EEvkiTQi7oMDP3MTXf4ZJiiTqsV3mbgY5GeUql1wHrr4La_M034iDD5Cj0deH7dwegK77t6Xu_jgDhDFkeCE83J6gapHpkYPppIETCputEV5zKCKBpKmxmCSaFE4-tSsffLbU7pqXiFhB_HoiMT5RGeyQlzWACQ_8fylVmFA7R-zTKH1S5-wHRIxBDG6_Q4yrJhwf8DzH0s111jAr5BK42LV-uJwwmirzOCOquMSj-8gEQMmtNtHJqIDoBozIQLratMoDm6Fd4EfhZ2oCIGGkLly_uuHt6_0jfFG0E280QzEFDp6ZF0BBftME3Y9YdVbr-zdbiND3ZmFUc4ZBGlrxRkxgQYmZYan7UdjEJK_8fk_x3JxlaXFi8YI5xQ7ZNHz8COPEcbHO4UR2ZPS4D52bYeWZhATigukM8V_7oRkVlfxR-eFwwic4Mo5w2JD2WT3kVvlgOl8H8ZjnrA0Oxt7TVCMBrOUWV7hq0qOejjJjuoaKcQxw8igNYk7_A7k0=s756-no" alt="Icon" />
                        <h1>Fundraiser Portal</h1>
                        </div>
                        <i onClick={() => this.setState(prevState => ({
                            menu: !prevState.menu
                        }))} class="fas fa-bars"></i>
                    </div>
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/director/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/FSJw-4kp3OzpqqfvlCwHai1eO604ZVDMP5nl2BsY3B_lX7WOGQItJQGnyliCFcXBfKZIpfhNh2aUYjLhqv39AVczFVOP2FedJf50WmWchF0ofKsHVhmhcFsA1JUx5vGICMnftmv4iMlBww88qZOqPQN0Ol-I5a1rZm4Uke8QVRqAv1VimOXzGGnT1hLMqfk5ertOe5kl-1gLiIYnhe8oXIk9iuc5GIIiviyAhIYcolapPcRH0V2zvH5ZW6EEvkiTQi7oMDP3MTXf4ZJiiTqsV3mbgY5GeUql1wHrr4La_M034iDD5Cj0deH7dwegK77t6Xu_jgDhDFkeCE83J6gapHpkYPppIETCputEV5zKCKBpKmxmCSaFE4-tSsffLbU7pqXiFhB_HoiMT5RGeyQlzWACQ_8fylVmFA7R-zTKH1S5-wHRIxBDG6_Q4yrJhwf8DzH0s111jAr5BK42LV-uJwwmirzOCOquMSj-8gEQMmtNtHJqIDoBozIQLratMoDm6Fd4EfhZ2oCIGGkLly_uuHt6_0jfFG0E280QzEFDp6ZF0BBftME3Y9YdVbr-zdbiND3ZmFUc4ZBGlrxRkxgQYmZYan7UdjEJK_8fk_x3JxlaXFi8YI5xQ7ZNHz8COPEcbHO4UR2ZPS4D52bYeWZhATigukM8V_7oRkVlfxR-eFwwic4Mo5w2JD2WT3kVvlgOl8H8ZjnrA0Oxt7TVCMBrOUWV7hq0qOejjJjuoaKcQxw8igNYk7_A7k0=s756-no" alt="Icon" />
                            {/* <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1> */}
                        </div>
                        <div class="Animate-Lines__horizontal"></div>
                        <div class="Animate-Lines__vertical"></div>
                    </div>
                    <div class={`Header-List-${this.state.menu}`}>
                        <div id="Home-Link" class="Header-Link" onClick={() => this.hitLink('/director/')}>
                            <p>Home</p>
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/create-user')}>
                            <p>Create Student Account</p>
                            <i class="fas fa-user-plus"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/user-info-list')}>
                            <p>All student<br></br>account info</p>
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/in-progress')}>
                            <p>Orders in Progress</p>
                            <i class="fas fa-user-edit"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/collected')}>
                            <p>Orders Collected</p>

                            <i class="fas fa-money-check-alt"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/confirm-options')}>
                            <p>Confirm Orders</p>

                            <i class="fas fa-comments-dollar"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/place-order')}>
                            <p> Finalize and send<br></br> complete order</p>
                            <i class="far fa-envelope"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/director/invoice')}>
                            <p>Invoice</p>
                            <i class="fas fa-file-invoice-dollar"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.logout()}>
                            <p>Logout</p>
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.stage === "order sent") {
            return (
                <div class="Header">
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/director/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/FSJw-4kp3OzpqqfvlCwHai1eO604ZVDMP5nl2BsY3B_lX7WOGQItJQGnyliCFcXBfKZIpfhNh2aUYjLhqv39AVczFVOP2FedJf50WmWchF0ofKsHVhmhcFsA1JUx5vGICMnftmv4iMlBww88qZOqPQN0Ol-I5a1rZm4Uke8QVRqAv1VimOXzGGnT1hLMqfk5ertOe5kl-1gLiIYnhe8oXIk9iuc5GIIiviyAhIYcolapPcRH0V2zvH5ZW6EEvkiTQi7oMDP3MTXf4ZJiiTqsV3mbgY5GeUql1wHrr4La_M034iDD5Cj0deH7dwegK77t6Xu_jgDhDFkeCE83J6gapHpkYPppIETCputEV5zKCKBpKmxmCSaFE4-tSsffLbU7pqXiFhB_HoiMT5RGeyQlzWACQ_8fylVmFA7R-zTKH1S5-wHRIxBDG6_Q4yrJhwf8DzH0s111jAr5BK42LV-uJwwmirzOCOquMSj-8gEQMmtNtHJqIDoBozIQLratMoDm6Fd4EfhZ2oCIGGkLly_uuHt6_0jfFG0E280QzEFDp6ZF0BBftME3Y9YdVbr-zdbiND3ZmFUc4ZBGlrxRkxgQYmZYan7UdjEJK_8fk_x3JxlaXFi8YI5xQ7ZNHz8COPEcbHO4UR2ZPS4D52bYeWZhATigukM8V_7oRkVlfxR-eFwwic4Mo5w2JD2WT3kVvlgOl8H8ZjnrA0Oxt7TVCMBrOUWV7hq0qOejjJjuoaKcQxw8igNYk7_A7k0=s756-no" alt="Icon" />
                            {/* <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1> */}
                        </div>
                        <div class="Animate-Lines__horizontal"></div>
                        <div class="Animate-Lines__vertical"></div>
                    </div>

                    {/* <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
       <i class="fas fa-user-plus"></i>
       <p>Create Student<br></br> Account</p>
   </div> */}

                    <div class="Header-Link" onClick={() => this.props.history.push('/print/director-placed-print')}>
                        <p>Final Order Info</p>
                        <i class="fas fa-user-edit"></i>
                    </div>



                    <div class="Header-Link" onClick={() => this.props.history.push('/director/user-info-listV2')}>
                        <p>All student<br></br>account info</p>
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="Header-Link" onClick={() => this.props.history.push('/director/invoice')}>
                        <p>Invoice</p>
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>
                    <div class="Header-Link" onClick={() => this.logout()}>
                        <p>Logout</p>
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    loading...
                </div>
            )
        }
    }

}

export default withRouter(DirectorHeader);
