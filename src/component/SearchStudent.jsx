import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchStudent = () => {
    const [data, setdata] = useState(
        {
            "firstname": ""

        }
    )
    const [result,resultdata] = useState([])
    // delete event handling
    const deleteStudent=(id)=>{
      let input=  {"_id": id }
      axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully deleted")
            } else {
                alert("error")
            }
        }
      ).catch().finally()
    }
    // input value fetching
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    // search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                resultdata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
        

    }

    return (

        <div>
            <NavBar />
            <h1><center>SEARCH</center></h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">firstname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>
                                    <th scope="col">delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value, index) => {
                                        return <tr>
                                            <td> {value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{deleteStudent(value._id)}}>DELETE</button></td>
                                        </tr>
                                    }
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchStudent