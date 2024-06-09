import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const[data,setData]=useState(
        {
            "fname":"",
            "lname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mob":"",
            "email":"",
            "add":""

        }
    )
    const inputHandler  = (event) => {
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue =() =>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
         <h1><center>ADD STUDENT</center></h1>
         <br />
        <container>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FIRST NAME</label>
                            <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">LAST NAME</label>
                            <input type="text" className="form-control"  name='lname' value={data.lname}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COLLEGE</label>
                            <input type="text" className="form-control"  name='college' value={data.college}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MOBILE</label>
                            <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                           <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                            <input type="text" className="form-control" name='add' value={data.add} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </container>
    </div>
  )
}

export default AddStudent