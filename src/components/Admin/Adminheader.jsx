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
                    <div class="IconBox">
                    {/* <img id="Icon" src="https://lh3.googleusercontent.com/3IKrDzD2el3Nad2Lig_nKZNZ8pxH9HP9aRDLySSIQdjalNBuuWekfz-HEI1XIk4ZQnPzBaT0UA1nGyzPNPBnQsJwRjDKU23CTW41XeumYCbiAKv6JIMYteIsZLmMHkO1H2CTWbTANrB1YlkY43zMGUCrpSOhajcVXKv6Zxy7Tjo3MpEg-hNfFmqSan2lS0Auk-arih7gCVKDlD5Uhia3dAjikPTOM5cVaWfUJxsjTx2XrMzgKxPOz87_SPlklx0XbSmrZ07oI70IySUx-ZaqoWlEmVp20DpPRb1_W3U5Ybzd1fR2x6Z8EdACLFb5DDaaVAXzH5X1vuZVp59PM4DRxAa_74CxlEshKsQ-Y6y7Mfa2gbhxLG0_2trJ07pPJe5TMLavuph9sI6wToxwAW5_mLcdcL8_RFn4tHhUiBNl48re6kNIPSmVQkJ6cwPawULNPojdK5BPL2DemalzIUtTtJzS3giu-7NH3CuOfQoGPtOGmmBdRG_vHxOxl6zRarUXSPgXLJhIvy-7NWE__rOl2G66JHvjErzoMPDpaO_XmDIvp7jEIlqcjoCUqgElGsQ0CM-pBGWUSjDe6KvLqmt6VEVQbRk-o63JTmisjB1KZP9D8tOv4oo9krE4yyxny9advzkL8awlPdBM2FEaOFp6festoO_6SMifUrZ_4oPO0Ovt2c9VKEvFqeOx81glG1iBs1coJGfOgGq44cHeBRVjghLAFOLKjpqjBNr6DwZqYp4f0hRLq8vXipk=s756-no" alt="Icon" /> */}
                    <h1 id="Fancy-Title-2-white">Fundraiser Portal</h1>
                    </div>
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
