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
                            <img id="Icon3" src="https://lh3.googleusercontent.com/xNMBgF0KojU7K9wRVZb4oGCBDjcGCLgT8pzCYsp_CWTIMQpW8-1zH0aMrnB2ul2mplP7ZCKQs6eVKa4lkpbfF6_c9osB41LLvBwxLcC5joT-WIqwyMpEhYbabBTRo0CS9XB6alxRYLefdKkP_Owyula2_zPpUwFtSahi82d_VLx57xrHvgwq7ze62NuoA4P_YB6AfBl7gkPEam13IAYxgeeivp1uUCIwAm3ExllHuzu1feXOQTKnJ-GfdgVLTnQytSDoIwAibEjOJElGSenXE8mcKt1drnidn5WjJIPR4fPJ-or63pqdClutfWkNNb7oS12OJBh_9vqW9DHGpFQ2p6xS0YJHAX6aIzSWYvUW38e0GelmB73RG_fnyZgReC8oZoDtR_t9zwlwY9ltQuW1BoDFVGlm1HdGrqV-9XEjAFExOOKUaWbmPbjssg6LiJBJShdkw63FocH7PD2IUoAfX_klMWuYBxdVDJ0IsJT3T-vg8rV11yg4xuK_xY9Tj6qRQkrxFJjhXMSD2j6gNV4mpFuhm-37dzGJaYgNZeTYnColxzthIc2aTVbN1Eo9gB-KKOx9L_kJSSA-nCD0VYxQ-9npb-Qzqvst8aOAXBH81jPnsG_pz0jn1qfqDRJ9wk9zXXGcTWvXVx3Ku3iidH22JTxhnOsgvX2tuzjVsxglBf4711svTWU_5DBsloyXOrAXxNG8ag5EFTetyGsfuxSD58b9a_Sb0sqAM05rBNS6q9o_zmDSW1WY4L4=s756-no" alt="Icon" />
                            <h1>Fundraiser Portal</h1>
                        </div>
                        <i onClick={() => this.setState(prevState => ({
                            menu: !prevState.menu
                        }))} class="fas fa-bars"></i>
                    </div>
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/user/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/xNMBgF0KojU7K9wRVZb4oGCBDjcGCLgT8pzCYsp_CWTIMQpW8-1zH0aMrnB2ul2mplP7ZCKQs6eVKa4lkpbfF6_c9osB41LLvBwxLcC5joT-WIqwyMpEhYbabBTRo0CS9XB6alxRYLefdKkP_Owyula2_zPpUwFtSahi82d_VLx57xrHvgwq7ze62NuoA4P_YB6AfBl7gkPEam13IAYxgeeivp1uUCIwAm3ExllHuzu1feXOQTKnJ-GfdgVLTnQytSDoIwAibEjOJElGSenXE8mcKt1drnidn5WjJIPR4fPJ-or63pqdClutfWkNNb7oS12OJBh_9vqW9DHGpFQ2p6xS0YJHAX6aIzSWYvUW38e0GelmB73RG_fnyZgReC8oZoDtR_t9zwlwY9ltQuW1BoDFVGlm1HdGrqV-9XEjAFExOOKUaWbmPbjssg6LiJBJShdkw63FocH7PD2IUoAfX_klMWuYBxdVDJ0IsJT3T-vg8rV11yg4xuK_xY9Tj6qRQkrxFJjhXMSD2j6gNV4mpFuhm-37dzGJaYgNZeTYnColxzthIc2aTVbN1Eo9gB-KKOx9L_kJSSA-nCD0VYxQ-9npb-Qzqvst8aOAXBH81jPnsG_pz0jn1qfqDRJ9wk9zXXGcTWvXVx3Ku3iidH22JTxhnOsgvX2tuzjVsxglBf4711svTWU_5DBsloyXOrAXxNG8ag5EFTetyGsfuxSD58b9a_Sb0sqAM05rBNS6q9o_zmDSW1WY4L4=s756-no" alt="Icon" />
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
                            <img id="Icon3" src="https://lh3.googleusercontent.com/xNMBgF0KojU7K9wRVZb4oGCBDjcGCLgT8pzCYsp_CWTIMQpW8-1zH0aMrnB2ul2mplP7ZCKQs6eVKa4lkpbfF6_c9osB41LLvBwxLcC5joT-WIqwyMpEhYbabBTRo0CS9XB6alxRYLefdKkP_Owyula2_zPpUwFtSahi82d_VLx57xrHvgwq7ze62NuoA4P_YB6AfBl7gkPEam13IAYxgeeivp1uUCIwAm3ExllHuzu1feXOQTKnJ-GfdgVLTnQytSDoIwAibEjOJElGSenXE8mcKt1drnidn5WjJIPR4fPJ-or63pqdClutfWkNNb7oS12OJBh_9vqW9DHGpFQ2p6xS0YJHAX6aIzSWYvUW38e0GelmB73RG_fnyZgReC8oZoDtR_t9zwlwY9ltQuW1BoDFVGlm1HdGrqV-9XEjAFExOOKUaWbmPbjssg6LiJBJShdkw63FocH7PD2IUoAfX_klMWuYBxdVDJ0IsJT3T-vg8rV11yg4xuK_xY9Tj6qRQkrxFJjhXMSD2j6gNV4mpFuhm-37dzGJaYgNZeTYnColxzthIc2aTVbN1Eo9gB-KKOx9L_kJSSA-nCD0VYxQ-9npb-Qzqvst8aOAXBH81jPnsG_pz0jn1qfqDRJ9wk9zXXGcTWvXVx3Ku3iidH22JTxhnOsgvX2tuzjVsxglBf4711svTWU_5DBsloyXOrAXxNG8ag5EFTetyGsfuxSD58b9a_Sb0sqAM05rBNS6q9o_zmDSW1WY4L4=s756-no" alt="Icon" />
                            <h1>Fundraiser Portal</h1>
                        </div>
                        <i onClick={() => this.setState(prevState => ({
                            menu: !prevState.menu
                        }))} class="fas fa-bars"></i>
                    </div>
                    <div class="Animate-Lines" onClick={() => this.props.history.push('/user/')}>
                        <div class="IconBox">
                            <img id="Icon" src="https://lh3.googleusercontent.com/xNMBgF0KojU7K9wRVZb4oGCBDjcGCLgT8pzCYsp_CWTIMQpW8-1zH0aMrnB2ul2mplP7ZCKQs6eVKa4lkpbfF6_c9osB41LLvBwxLcC5joT-WIqwyMpEhYbabBTRo0CS9XB6alxRYLefdKkP_Owyula2_zPpUwFtSahi82d_VLx57xrHvgwq7ze62NuoA4P_YB6AfBl7gkPEam13IAYxgeeivp1uUCIwAm3ExllHuzu1feXOQTKnJ-GfdgVLTnQytSDoIwAibEjOJElGSenXE8mcKt1drnidn5WjJIPR4fPJ-or63pqdClutfWkNNb7oS12OJBh_9vqW9DHGpFQ2p6xS0YJHAX6aIzSWYvUW38e0GelmB73RG_fnyZgReC8oZoDtR_t9zwlwY9ltQuW1BoDFVGlm1HdGrqV-9XEjAFExOOKUaWbmPbjssg6LiJBJShdkw63FocH7PD2IUoAfX_klMWuYBxdVDJ0IsJT3T-vg8rV11yg4xuK_xY9Tj6qRQkrxFJjhXMSD2j6gNV4mpFuhm-37dzGJaYgNZeTYnColxzthIc2aTVbN1Eo9gB-KKOx9L_kJSSA-nCD0VYxQ-9npb-Qzqvst8aOAXBH81jPnsG_pz0jn1qfqDRJ9wk9zXXGcTWvXVx3Ku3iidH22JTxhnOsgvX2tuzjVsxglBf4711svTWU_5DBsloyXOrAXxNG8ag5EFTetyGsfuxSD58b9a_Sb0sqAM05rBNS6q9o_zmDSW1WY4L4=s756-no" alt="Icon" />
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
