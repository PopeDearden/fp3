import React, { Component } from "react";
import axios from "axios";
import InvoiceHistory from "../Hybrid/InvoiceHistory";




class UserInfoList extends Component {
  constructor(s) {
    super()
    this.state = {
      students: [],
      search: '',
    }
  }
  componentDidMount () {
    this.getStudents()
  }

  getStudents = () => {
    axios.get('/api/student-info').then(res =>{
      console.log(res.data)
    this.setState({
      students: res.data
    })
    })
  }

  render(){
    
    const students = this.state.students.filter((element, index) => {
      return element.last_name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return(
      <div className = "App" >
        <div class="General-Content">
            <div class="Title-Bar">
              <h2>
               All Student Info
              </h2>
            </div>

          <div class="TableContainer2">
            <input class="Search" placeholder={"Search by student last name"} onChange={e => this.setState({ search: e.target.value })} />    <i class="fas fa-search"></i>
            <table class="ConfirmTable">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Samples Given</th>
                  <th>Edit</th>
                </tr>
              </thead>
              {students.map(student=> (
                <tr id="DataRow">
                  <td>{student.first_name} {student.last_name}</td>
                  <td>{student.username}</td>
                  <td>{student.password}</td>
                  <td>
                    <p>Black Flashlight {student.sample_light_black}</p>
                    <p>Yellow Flashlight {student.sample_light_yellow}</p>
                    <p>Yellow Lantern {student.sample_puc_yellow}</p>
                  </td>
                  <td id="EditData"><i onClick={() =>this.props.history.push(`/director/update-user/${student.user_id}`)} class="far fa-edit"></i></td>
                </tr>
              ))}
            </table>
          </div>

        </div>

 
  
      </div>
    )

  }
}

export default UserInfoList;
