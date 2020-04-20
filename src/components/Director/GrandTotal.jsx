import React, { Component } from "react";
import axios from "axios";




class GrandTotal extends Component {
    constructor(s) {
        super()
        this.state = {

        }
    }
    componentDidMount () {
        axios.get('/api/director/grand-total').then(res =>
            console.log(res.data)
            )
    }

    render() {
        return (
            <div className="App" >
                <div class="Grandtotal">
                   
                </div>

            </div>
        )

    }
}

export default GrandTotal;
