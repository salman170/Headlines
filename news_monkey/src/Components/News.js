import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize : 8,
    category: "general"
  }
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  }
  
  constructor() {
    super();
    
    this.state = {
      // articles: [this.articles],
      articles: [],
      loading: false,
      page: 1
    }

  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=599109608c4545bcacd60d824290bf90&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(data)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }

  handlePrevious = async () => {
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=599109608c4545bcacd60d824290bf90&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  handleNext = async () => {
    console.log("Next")
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=599109608c4545bcacd60d824290bf90&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:"35px"}}>NewsMonkey Top HeadLines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-md-4" key={e.url}>
              {/* <NewsItem title={e.title ? e.title.slice(0, 45) : ""} descreption={e.description ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage} newsUrl={e.url} /> */}
              <NewsItem title={e.title} descreption={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}


//my-3 marging from top medium devices mai yah 4 divices lay lagi . we have total 12 grads in Bootstraps
//we are returning div so we need to give key to div
