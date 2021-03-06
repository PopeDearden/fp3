import React, { Component } from "react";
import axios from "axios";




class AllDirectors extends Component {
    constructor(s) {
        super()
        this.state = {
            directors: [],

        }
    }
    componentDidMount() {
        this.getDirectors()
    }

    getDirectors = () => {
        axios.get('/api/admin/get-directors').then(res => {
            console.log(res.data)
            this.setState({
                directors: res.data
            })
        })

    }
    render() {
        return (
            <div className="App" >
                <div class="General-Content">
                    <div class="Title-Bar">
                        <h2>
                            All Directors Info
              </h2>
                    </div>

                    <div class="TableContainer2">
                        {/* <input class="Search" placeholder={"Search by director last name"} onChange={e => this.setState({ search: e.target.value })} />    <i class="fas fa-search"></i> */}
                        <table class="ConfirmTable2">
                            <thead>
                                <tr>
                                    <th>School &<br></br>Director Name</th>
                                    <th>Stage</th>
                                    <th>Address</th>
                                    <th>Email/phone</th>
                                    <th>Password</th>
                                    <th>Tag</th>
                                    <th>Samples Ordered<br></br>(Total)</th>
                                    <th id="EditWidth">Edit</th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            {this.state.directors.map(director => (
                                <tr id="DataRow">
                                    <td><b id="bold">{director.school_name}</b> <br></br>{director.first_name} {director.last_name}</td>
                                    <td>{director.stage}</td>
                                    <td>{director.school_street}<br></br>{director.school_city}, {director.school_state}  {director.school_zip}</td>
                                    <td>{director.email}<br></br>{director.phone}</td>
                                    <td>{director.password}</td>
                                    <td>{director.tag}</td>
                                    <td>
                                        <p>Black Flashlight {director.black_flash_sample}</p>
                                        <p>Yellow Flashlight {director.yellow_flash_sample}</p>
                                        <p>Yellow Lantern {director.yellow_puc_sample}</p>
                                    </td>
                                    <td id="EditData"><i onClick={() => this.props.history.push(`/admin/update-director/${director.director_id}`)} class="far fa-edit"></i></td>
                                    <td id="EditData"><i onClick={() => this.props.history.push(`/admin/summary/${director.director_id}`)}  class="fas fa-chart-line"></i></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}

export default AllDirectors;
