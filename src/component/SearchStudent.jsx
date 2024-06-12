import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchStudent = () => {
    const[data,setdata]=useState(
        {
            "firstname":"",
           
        }
    )
    const inputHandler  = (event) => {
        setdata({...data,[event.target.name]: event.target.value})
    }
    const readValue =() => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") 
                   
                {
                    alert("success")
                } 
                else {
                    alert("error")
                }
            }
        ).catch()
    }
    
  return (
    
    <div>
        <NavBar/>
        <h1><center>SEARCH</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent