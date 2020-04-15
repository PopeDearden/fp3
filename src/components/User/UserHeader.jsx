import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'



class StudentHeader extends Component {
    constructor(s) {
        super()
        this.state = {
            confirmed: false,
            menu: false,
        }
    }

    componentDidMount() {
        this.getStage()
    }

    getStage = () => {
        axios.get('/api/student/stage').then(res => {
            this.setState({
                confirmed: res.data
            })
        })
    }
    logout = () => {
        axios.get('/api/logout').then(res => {
            Swal.fire('Logged Out')
            this.props.history.push('/')
        })
    }
    hitLink = async (path) => {
        await this.setState(prevState => ({
            menu: !prevState.menu
        }))
        this.props.history.push(path)
    }


    render() {

        if (this.state.confirmed === false) {
            return (
                <div class="Header">
                    <div class="Header-Menu">
                        <div class="Split2">
                            <img id="Icon3" src="https://lh3.googleusercontent.com/eZWsUwxzAsEEEpahbJ9NLwEIW844JpFnh7x4jSqLfOo9jfCLuMqdDddDrcokS-psiXcWXfVfIOXs7uRmrW_RhXR-XLVyvSm-kSr8XulfI-uSGva1a1uTzhdaHAI2DQ_SlrAhxG4GVqF4snzo43Rn_SdZtmAt2hJfTSI8tbN9Fs-4arY9KHmSnw3NfmVlwj_0yTPAcMUQQ2LGGndE8bqYVCYa_sI6awcMZUK00xTW9bs95bE3vGu2zDPja4RjPYXTAE8TyFL9iuSOE5ljKZgo505aiILgXt4ipEIS1efHKFrQTdIFtDnRYMn1CjkqAKcjCgewSmpqXV7p6QLXYSQlGFE7wQ9YgUo3ge2uApeYcgbLI5dSVoY2Z9HmRe3XHv8G_N_0wk9QT-lie80lbMR_asQfM9Me3uNs-wuAofdGJAs2hLlCiMRoqprq9KDU_Cjp0i3NaTsbZE6MrMeAfiRhjIio4pFA4ILd52PSoFINVSAwpnBXS2rbR8gOkAVPSaz3Mb3dQJIWTmpH5Qf-coAEAXN5Wok7P5wWpnDAe2M-PPCO2vB3SogVaA8xa-5B4ps2DombyEZOGlJMonNKjeQ5-lo6Xg4AUXHObp_LKV7wBedf8UbgNQNrjooeD5hLp8tNFSF94qrAkVLSlQikmNVCeX9SPbwetCXddu2A8ehHv2f9mPaM0Sd2NFT1f30mnQK8Z9SiE5tg6qGs4rNSJUefRu4WTWD5wjdpXsSfEpAs_z8f8sZWw_6dQSU=w760-h761-no" alt="Icon" />
                            <h1>Fundraiser Portal</h1>
                        </div>
                        <i onClick={() => this.setState(prevState => ({
                            menu: !prevState.menu
                        }))} class="fas fa-bars"></i>
                    </div>
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/user/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/eZWsUwxzAsEEEpahbJ9NLwEIW844JpFnh7x4jSqLfOo9jfCLuMqdDddDrcokS-psiXcWXfVfIOXs7uRmrW_RhXR-XLVyvSm-kSr8XulfI-uSGva1a1uTzhdaHAI2DQ_SlrAhxG4GVqF4snzo43Rn_SdZtmAt2hJfTSI8tbN9Fs-4arY9KHmSnw3NfmVlwj_0yTPAcMUQQ2LGGndE8bqYVCYa_sI6awcMZUK00xTW9bs95bE3vGu2zDPja4RjPYXTAE8TyFL9iuSOE5ljKZgo505aiILgXt4ipEIS1efHKFrQTdIFtDnRYMn1CjkqAKcjCgewSmpqXV7p6QLXYSQlGFE7wQ9YgUo3ge2uApeYcgbLI5dSVoY2Z9HmRe3XHv8G_N_0wk9QT-lie80lbMR_asQfM9Me3uNs-wuAofdGJAs2hLlCiMRoqprq9KDU_Cjp0i3NaTsbZE6MrMeAfiRhjIio4pFA4ILd52PSoFINVSAwpnBXS2rbR8gOkAVPSaz3Mb3dQJIWTmpH5Qf-coAEAXN5Wok7P5wWpnDAe2M-PPCO2vB3SogVaA8xa-5B4ps2DombyEZOGlJMonNKjeQ5-lo6Xg4AUXHObp_LKV7wBedf8UbgNQNrjooeD5hLp8tNFSF94qrAkVLSlQikmNVCeX9SPbwetCXddu2A8ehHv2f9mPaM0Sd2NFT1f30mnQK8Z9SiE5tg6qGs4rNSJUefRu4WTWD5wjdpXsSfEpAs_z8f8sZWw_6dQSU=w760-h761-no" alt="Icon" />
                            {/* <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1> */}
                        </div>
                        <div class="Animate-Lines__horizontal"></div>
                        <div class="Animate-Lines__vertical"></div>
                    </div>
                    <div class={`Header-List-${this.state.menu}`}>
                        <div id="Home-Link" class="Header-Link" onClick={() => this.hitLink('/user/')}>
                            <p>Dashboard</p>
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/user/create-order')}>
                            <p>Create a new order</p>
                            <i class="fas fa-user-plus"></i>

                        </div>
                        {/* <div class="New-User" onClick={()=>this.props.history.push('/director/create-user')}>
                <i class="fas fa-user-plus"></i>
                <p>Create Student<br></br> Account</p>
            </div> */}

                        <div class="Header-Link" onClick={() => this.hitLink('/user/in-progress')}>
                            <p>Orders in Progress</p>
                            <i class="fas fa-user-edit"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.hitLink('/user/collected')}>
                            <p>Orders w/ money collected</p>

                            <i class="fas fa-money-check-alt"></i>
                        </div>
                        {/* <div class="Header-Link" onClick={() => this.props.history.push('/user/confirmed')}>
                <p>Orders Confirmed by<br></br>your director</p>
                
                <i class="fas fa-comments-dollar"></i>
            </div> */}
                        <div class="Header-Link" onClick={() => this.logout()}>
                            <p>Logout</p>
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="Header">
                    <div class="Header-Menu">
                        <div class="Split2">
                            <img id="Icon3" src="https://lh3.googleusercontent.com/eZWsUwxzAsEEEpahbJ9NLwEIW844JpFnh7x4jSqLfOo9jfCLuMqdDddDrcokS-psiXcWXfVfIOXs7uRmrW_RhXR-XLVyvSm-kSr8XulfI-uSGva1a1uTzhdaHAI2DQ_SlrAhxG4GVqF4snzo43Rn_SdZtmAt2hJfTSI8tbN9Fs-4arY9KHmSnw3NfmVlwj_0yTPAcMUQQ2LGGndE8bqYVCYa_sI6awcMZUK00xTW9bs95bE3vGu2zDPja4RjPYXTAE8TyFL9iuSOE5ljKZgo505aiILgXt4ipEIS1efHKFrQTdIFtDnRYMn1CjkqAKcjCgewSmpqXV7p6QLXYSQlGFE7wQ9YgUo3ge2uApeYcgbLI5dSVoY2Z9HmRe3XHv8G_N_0wk9QT-lie80lbMR_asQfM9Me3uNs-wuAofdGJAs2hLlCiMRoqprq9KDU_Cjp0i3NaTsbZE6MrMeAfiRhjIio4pFA4ILd52PSoFINVSAwpnBXS2rbR8gOkAVPSaz3Mb3dQJIWTmpH5Qf-coAEAXN5Wok7P5wWpnDAe2M-PPCO2vB3SogVaA8xa-5B4ps2DombyEZOGlJMonNKjeQ5-lo6Xg4AUXHObp_LKV7wBedf8UbgNQNrjooeD5hLp8tNFSF94qrAkVLSlQikmNVCeX9SPbwetCXddu2A8ehHv2f9mPaM0Sd2NFT1f30mnQK8Z9SiE5tg6qGs4rNSJUefRu4WTWD5wjdpXsSfEpAs_z8f8sZWw_6dQSU=w760-h761-no" alt="Icon" />
                            <h1>Fundraiser Portal</h1>
                        </div>
                        <i onClick={() => this.setState(prevState => ({
                            menu: !prevState.menu
                        }))} class="fas fa-bars"></i>
                    </div>
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/user/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/eZWsUwxzAsEEEpahbJ9NLwEIW844JpFnh7x4jSqLfOo9jfCLuMqdDddDrcokS-psiXcWXfVfIOXs7uRmrW_RhXR-XLVyvSm-kSr8XulfI-uSGva1a1uTzhdaHAI2DQ_SlrAhxG4GVqF4snzo43Rn_SdZtmAt2hJfTSI8tbN9Fs-4arY9KHmSnw3NfmVlwj_0yTPAcMUQQ2LGGndE8bqYVCYa_sI6awcMZUK00xTW9bs95bE3vGu2zDPja4RjPYXTAE8TyFL9iuSOE5ljKZgo505aiILgXt4ipEIS1efHKFrQTdIFtDnRYMn1CjkqAKcjCgewSmpqXV7p6QLXYSQlGFE7wQ9YgUo3ge2uApeYcgbLI5dSVoY2Z9HmRe3XHv8G_N_0wk9QT-lie80lbMR_asQfM9Me3uNs-wuAofdGJAs2hLlCiMRoqprq9KDU_Cjp0i3NaTsbZE6MrMeAfiRhjIio4pFA4ILd52PSoFINVSAwpnBXS2rbR8gOkAVPSaz3Mb3dQJIWTmpH5Qf-coAEAXN5Wok7P5wWpnDAe2M-PPCO2vB3SogVaA8xa-5B4ps2DombyEZOGlJMonNKjeQ5-lo6Xg4AUXHObp_LKV7wBedf8UbgNQNrjooeD5hLp8tNFSF94qrAkVLSlQikmNVCeX9SPbwetCXddu2A8ehHv2f9mPaM0Sd2NFT1f30mnQK8Z9SiE5tg6qGs4rNSJUefRu4WTWD5wjdpXsSfEpAs_z8f8sZWw_6dQSU=w760-h761-no" alt="Icon" />
                            {/* <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1> */}
                        </div>
                        <div class="Animate-Lines__horizontal"></div>
                        <div class="Animate-Lines__vertical"></div>
                    </div>
                    <div class={`Header-List-${this.state.menu}`}>
                    <div id="Home-Link" class="Header-Link" onClick={() => this.hitLink('/user/')}>
                            <p>Dashboard</p>
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.props.history.push('/print/student-final-order')}>
                            <p>Your Final Orders</p>

                            <i class="fas fa-money-check-alt"></i>
                        </div>
                        <div class="Header-Link" onClick={() => this.logout()}>
                            <p>Logout</p>
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default withRouter(StudentHeader);
