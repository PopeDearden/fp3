import React, { Component } from "react";
import axios from "axios";




class HybridSamples extends Component {
    constructor(s) {
        super()
        this.state = {
            requested: [],
        }
    }

    componentDidMount = () => {
        this.getRequested()
    }
    getRequested = () => {
        axios.get('/api/hybrid/sample-order')
            .then(res => {
                console.log(res.data)
                this.setState({
                    requested: res.data
                })
            })
    }
    render() {
        return (
            <div className="App" >
                <div class="General-Content">
                    <div class="Title-Bar">
                    <h2>Requested Samples</h2>
                    </div>
                    <div class="TableContainer">

                    <table class="ConfirmTable">
                    <thead>
                        <tr>
                            <th>
                                School Name
                            </th>
                            <th>
                               Director Name
                            </th>
                            <th>
                                View/Update
                            </th>
                        </tr>
                    </thead>

                    {this.state.requested.map(samples => (
                        <tr id="DataRow">
                            <td>{samples.school_name}</td>
                            <td>{samples.first_name} {samples.last_name}</td>
 
                            <td id="EditData" onClick={()=> this.props.history.push(`/hybridlight/samples-update/${samples.tag}`)}><i class="far fa-edit"></i></td>
                        </tr>
                    ))}
                    </table>
                    </div>
                </div>
            </div>
        )

    }
}

export default HybridSamples;
