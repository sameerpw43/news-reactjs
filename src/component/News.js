import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
  constructor() {
    super();
    console.log('hello world!');
    this.state = {
      articles :[],
      loading:false,
      page:1
      
    }
  }
 async componentDidMount(){
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4a9a4317164403ea7f0adc28e61ce73`;
    let data = await fetch(Url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles,totalResults:parseData.totalResults})
  }
  handleNexClick = async () =>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else {
    let Url = `https://newsapi.org/v2/top-headlines?country=&category=&apiKey=&page=&page=20`;
    let data = await fetch(Url);
    let parseData = await data.json()
    console.log(parseData);
    
this.setState({
  page:this.state.page+1,
  articles:parseData.articles
})}
  }
  handlePrevClick = async() =>{
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4a9a4317164403ea7f0adc28e61ce73=&page=1`;
    let data = await fetch(Url);
    let parseData = await data.json()
    console.log(parseData);
    
this.setState({
  page:this.state.page-1,
  articles:parseData.articles
  })
}
  render() {
    return (
        
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey top headlines</h1>
       
        
        <div className="row">
        {this.state.articles.map((element)=>{
  return <div className="col md-4" key={element.Url}>
 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}  url={element.url}/>
 </div>
        })}
           
            
       
        </div>
       <div className="container d-flex justify-content-between">
       <button disable = {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
       <button disable = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNexClick}>	&rarr;Next</button>

       </div>
       
      </div>
    )
  }
}

export default News
