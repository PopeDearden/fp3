import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import swal from "sweetalert";



class ConfirmOptions extends Component {
    constructor(s) {
        super()
        this.state = {
            students: [],
        }
    }
    componentDidMount () {
        this.getStudents()
    }
    getStudents = () => {
        axios.get('/api/director/students').then(res => {
           this.setState({
               students: res.data
           })
        })
    }
    status = (status) => {
        if(status === false) {
            return(
                <i id="bad" class="fas fa-times-circle"> NOT CONFIRMED</i>
            )
        } else {
            return(
                <i id="good" class="fas fa-check-circle">CONFIRMED</i>
            )
        }
    }
    getTotals = async (id, student) => {
        await axios.put(`api/director/student-totals/${id}`).then(res=>{
            let total = res.data[0]
            Swal.fire({
                html: `<p style="font-size: 2rem;">Can you confirm that ${student} has collected <b style="font-weight: bold;">$${+res.data[0].total}.00</b> and turned in the funds to your school?</p> <p>You should have reviewed the student's orders in the "orders collected" tab with the student to verify accuracy!</p><p>${total.flashlights} Black Flashlights</p><p>${total.flashlight_yellow} Yellow Flashlights</p><p>${total.pucs} Yellow Lanterns</p>`,
                title: ` `,
                text: `You should have reviewed the student's orders in the "orders collected" tab with the student to verify accuracy!`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: 'purple',
                cancelButtonColor: '#d33',
                confirmButtonText: `Yes`
              }).then(async (result) => {
                  if (result.value) {
                    await axios.put(`/api/director/student-confirm/${id}`)
                  Swal.fire(
                  "Success!",
                  `The orders for ${student} have been marked as confirmed!`
                  )
                  this.getStudents()
                }
              })
        })

    }
    editButton = (status, id, student) => {
        if(status === false){
            this.getTotals(id, student)
        }
        else{
            this.undoConfirm(id, student)
        }
    }
    undoConfirm = (id, student) => {
        Swal.fire({
            title: `Do you want to UNCONFIRM all orders for ${student}?  `,
            text: `If not, click cancel.`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'purple',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes`
          }).then(async(result) => {
            if (result.value) {
                await axios.put(`/api/director/student-unconfirm/${id}`)
              Swal.fire(
              "UNCONFIRMED",
              `The orders for ${student} have been marked as UNCONFIRMED!`
              )
              this.getStudents()
            }
          })
    }


    render() {
        return (
            <div className="App" >
                <div class="General-Content">
                    <h2 class="Title-Bar-Confirm">  <i class="fas fa-comments-dollar"></i> Confirm student's collected $</h2>
                    {/* <button id="GeneratePrint" onClick={()=>this.props.history.push('/print/director-confirmed-list')}>PDF of Confirmed Orders</button> */}
                    
                    {/* <div class="Form-Box">
                        <div class="Form-Box-Left">
                            <h3>View confirmed orders: </h3>
                            <br></br>
                            <button id="medium">View Confirmed Orders</button>
                        </div>
                        <div class="Form-Box-Right">
                            <h3>Print Confirmed Orders: </h3>
                            <br></br>
                            <button id="medium">Generate Confirmed orders PDF</button>

                        </div>
                    </div> */}
                        <table class="ConfirmTable">
                            <tr id="TableHeader2">
                                <th>
                                    Student Name
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                    Update Status
                                </th>
                            </tr>
                                {this.state.students.map(student=> (
                                    <tr id="DataRow">
                                        <td >{student.first_name} {student.last_name}</td>
                                        <td >{this.status(student.confirmed)}</td>
                                        
                                        <td id="EditData" ><i onClick={()=>this.editButton(student.confirmed, student.user_id, `${student.first_name} ${student.last_name}`)}class="far fa-edit"></i></td>
                                    </tr>
                                ))}
                        </table>

                    </div>
                
                </div>

        )

    }
}

export default ConfirmOptions;
