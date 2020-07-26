import React, { Component } from "react";
import axios from "axios";




class GrandTotal extends Component {
    constructor(s) {
        super()
        this.state = {
            with_no_sales: [],
            with_sales: [],
        }
    }
    componentDidMount () {
        this.getData()
    }
    
    getData = async () => {
        await axios.get('/api/director/grand-total').then(res =>
            this.setState({
                with_sales: res.data.with_sales,
                with_no_sales: res.data.with_no_sales
            })
            )
            console.log(this.state)
    }

    render() {
        return (
            <div className="General-Content" >
                <div className="Title-Bar"><h1>Student Balances</h1></div>
                <button id="GeneratePrint" onClick={() => window.print()}>Generate PDF</button>
                <div className="SpreadSheet">
                    <h2 className="">Students with sales</h2>
                    <table className="SpreadSheet">
                        <tr>
                            <th>Student</th>
                            <th>Black Flashlight Sales</th>
                            <th>Yellow Flashlight Sales</th>
                            <th>Yellow Lantern Sales</th>
                            <th>Total Collected</th>
                            <th>School Cost for sales</th>
                            <th>Samples</th>
                            <th>Total Sample Cost</th>
                            <th>Student's Earning Balance</th>
                        </tr>
                        {this.state.with_sales.map(student => (
                            <tr key={student.user_id}>
                                <td>{student.first_name} {student.last_name}</td>                           
                                <td>({student.total_black_flashlights}) ${student.money_black_flashlights}</td>
                                <td>({student.total_yellow_flashlights}) ${student.money_yellow_flashlights}</td>
                                <td>({student.total_yellow_pucs}) ${student.money_yellow_pucs}</td>
                                <td>${student.total_collected}</td>
                                <td>$-{(student.total_collected/2).toFixed(2)}</td>
                                <td>Black Flashlight: ({student.sample_light_black}) $-{student.black_flash_cost}<br></br>
                                    Yellow Flashlight: ({student.sample_light_yellow}) $-{student.yellow_flash_cost}<br></br>
                                    Yellow Lantern: ({student.sample_puc_yellow}) $-{student.yellow_puc_cost}
                                </td>
                                <td>$-{student.total_sample_cost}</td>
                                <td><b id="bold">${(student.student_balance-(student.total_collected/2)).toFixed(2)}</b></td>
                            </tr>
                        ))}
                    </table>
                    <h2>Students with no sales</h2>
                    <table className="SpreadSheet">
                        <tr>
                            <th>Student</th>
                            <th>Black Flashlight Sales</th>
                            <th>Yellow Flashlight Sales</th>
                            <th>Yellow Lantern Sales</th>
                            <th>Total Collected</th>
                            <th>School Cost</th>
                            <th>Samples</th>
                            <th>Total Sample Cost</th>
                            <th>Student's Earning Balance</th>
                        </tr>
                        {this.state.with_no_sales.map(student => (
                            <tr key={student.user_id}>
                                <td>{student.first_name} {student.last_name}</td>                           
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$-{(student.total_collected/2).toFixed(2)}</td>
                                <td>Black Flashlight: ({student.sample_light_black}) $-{student.black_flash_cost}<br></br>
                                    Yellow Flashlight: ({student.sample_light_yellow}) $-{student.yellow_flash_cost}<br></br>
                                    Yellow Lantern: ({student.sample_puc_yellow}) $-{student.yellow_puc_cost}
                                </td>
                                <td>$-{student.total_sample_cost}</td>
                                <td><b id="bold">$-{student.total_sample_cost}</b></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        )

    }
}

export default GrandTotal;
