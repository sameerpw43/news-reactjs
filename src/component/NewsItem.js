import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let   {title,description,imageUrl,url} = this.props;
    return (
     
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/439B/production/_129370371_e1fbbdd211aff4aff579066ad9e29f3bab6f57ae227_316_3103_17451000x563.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

