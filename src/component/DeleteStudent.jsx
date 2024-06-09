import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>DELETE</center></h1>
        <br />
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ALBUM ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">DELETE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent