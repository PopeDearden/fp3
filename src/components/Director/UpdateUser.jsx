import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'



class UpdateUser extends Component {
    constructor(s) {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            password: '',
            sample_light_black: 0,
            sample_light_yellow: 0,
            sample_puc_yellow: 0,
            sample_puc_black: 0,
            info: [0],
        }
    }

    componentDidMount() {
        axios.put(`/api/director/user/${this.props.match.params.id}`).then(res => {
            const student = res.data[0]
            this.setState({
                first_name: student.first_name,
                last_name: student.last_name,
                password: student.password,
                sample_light_black: student.sample_light_black,
                sample_light_yellow: student.sample_light_yellow,
                sample_puc_yellow: student.sample_puc_yellow,
                sample_puc_black: student.sample_puc_black,
            })
        })
        axios.get('/api/check-director').then(res => {
            console.log(res.data[0])
            this.setState({
                info: res.data[0]
            })
        })
    }

    generatePassword = () => {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyz01234567891234567890",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        this.setState({
            password: retVal
        })
    }
    UpdateUser = () => {
        if (this.state.first_name === '' || this.state.last_name === '' || this.state.password === '')
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name, Last Name, and Password are required',
                })
            )
        axios.put(`/api/director/update/user/${this.props.match.params.id}`, this.state).then(res => {
            if (res.data === 'Updated Student') {
                return (
                    Swal.fire({
                        icon: 'success',
                        title: 'Student Account Successfully Updated'
                    })

                )
            }
        })
    }

    render() {
        return (
            <div class="General-Page" >
                <div class="General-Content">
                <div class="Title-Bar">
                    <h2>Update Student Account: {this.state.first_name} {this.state.last_name}</h2>
                </div>
                    <div class="Form-Box">
                        <div class="Form-Box-Left">
                            <h2>Update student account</h2>
                            <br></br>
                            <div class="Form-Split">
                                <div>
                                    <h3>First Name:</h3>
                                    <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
                                    <h3>Last Name</h3>
                                    <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
                                </div>
                                <div>
                                    <p>*Username will be: <br>
                                    </br><br></br>
                                        <h3>
                                            <b id="bold">
                                                {this.state.first_name}{this.state.last_name}-{this.state.info.tag}
                                            </b>
                                        </h3>
                                        <br></br>
                    *will be case sensitive
                  </p>
                                </div>
                            </div>
                            <div class="Form-Split">
                                <div>
                                    <h3>Password:</h3>
                                    <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                    <div>
                                        <button id="Small" onClick={() => this.generatePassword()}>Generate Password</button>

                                    </div>
                                </div>
                                <p>
                                    You can create a password for the student of your own, or you can automatically generate one.<br></br>
                                </p>
                            </div>
                        </div>
                        <div class="Form-Box-Right">
                            <h2>Samples Given to the Student</h2>
                            <h3 id="bad">Students should not be given more than one of each</h3>
                            <br></br>
                            <div class="Form-Split">
                                <div>
                                    <h3>(Black) FlashLights</h3>
                                    <select id="Drop" value={this.state.sample_light_black} onChange={e => this.setState({ sample_light_black: +e.target.value })}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                    </select>
                                </div>
                                <div>
                                    <h3>(Yellow) FlashLights</h3>
                                    <select id="Drop" value={this.state.sample_light_yellow} onChange={e => this.setState({ sample_light_yellow: +e.target.value })}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="Form-Split">
                                <div>
                                    <h3>(Yellow) Lanterns</h3>
                                    <select id="Drop" value={this.state.sample_puc_yellow} onChange={e => this.setState({ sample_puc_yellow: +e.target.value })} >
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                    </select>
                                </div>
                                <div>
                                    {/* <h3>(Black) Lanterns</h3>
                  <input type="number" min="0" max="1" value={this.state.sample_puc_black} onChange={e => this.setState({ sample_puc_black: +e.target.value })} /> */}
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <button onClick={() => this.UpdateUser()} id="medium">Update Student Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default UpdateUser;
