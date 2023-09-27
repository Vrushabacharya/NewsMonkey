import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description,imageurl,newsurl,author,Date,source} = this.props
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span class="badge rounded-pill text-bg-dark">{source}</span>
  <img src={imageurl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text" className="text-body-secondary">{!author?"unknown" :author} updated {Date} </p>
    <a href={newsurl} target='blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems
