import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewStudent = () => {
    const[data,setdata]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setdata(response.data)
            }
        ).catch().finally()

    }
    useEffect(()=>{fetchData()},[])
    return (

        <div>
            <NavBar />
            <h1><center>LIST OF STUDENTS</center></h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Fisrt name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>
                                </tr>
                            </thead>
                            {data.map(
                                (value,index) =>{
                                   return  <tbody>
                                
                                   <tr>
   
                                       
                                       <td>{value.firstname}</td>
                                       <td>{value.lastname}</td>
                                       <td>{value.college}</td>
                                       <td>{value.dob}</td>
                                       <td>{value.course}</td>
                                       <td>{value.mobile}</td>
                                       <td>{value.email}</td>
                                       <td>{value.address}</td>
                                   </tr>
                                  
                               </tbody> 
                                }
                            )}
                           
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent