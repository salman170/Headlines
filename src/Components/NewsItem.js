// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, descreption, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3' >
        <div className="card" >
          <img src={imageUrl ? imageUrl : "https://static.independent.co.uk/2022/12/16/16/nuclear%20fusion%20power%20plant.jpg?quality=75&width=1200&auto=webp"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-0  badge rounded-pill bg-danger" style={{ zIndex: "1" }}>
              {source}
            </span></h5>
            <p className="card-text">{descreption}</p>
            <p className="card-text"><small className='text-success'><i>By <b>{author ? author : "Unkown"}</b> on {new Date(date).toDateString()}</i></small></p>
            <a href={newsUrl} target="_blank" rel='noopener noreferrer' className="btn btn-sm btn-dark">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

//className="btn btn-sm btn-dark" for dark button
//className="btn btn-sm btn-primary" for blue button
//bootstrap flex box
//style={{ width: "18rem", border: "solid grey 5px ", borderRadius:"10px", boxShadow:"10px 10px #2F4F4F" }}