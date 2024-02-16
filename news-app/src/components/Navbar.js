import React, { Component } from 'react';
import {Link} from "react-router-dom";



export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light color-red">
  <div className="container-fluid ">
    <Link className="navbar-brand text-light"to="#">NewsTiger</Link>
    <button className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="#"></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/business">bussiness</Link>
        </li>
          
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/technology">technology</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
