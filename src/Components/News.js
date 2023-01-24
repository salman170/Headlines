import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  }

  makeCapitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      // articles: [this.articles],
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1
    }
    document.title = `${this.makeCapitalFirstLetter(this.props.category)} Headlines`
  }

  async newsUpdate() {
    const { country, category, pageSize, apiKey, setProgress } = this.props
    setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    setProgress(40)
    let parseData = await data.json()
    setProgress(70)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    setProgress(100)
  }
  async componentDidMount() {
    this.newsUpdate()
  }

  // handlePrevious = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.newsUpdate()
  //   console.log("from previous")
  // }

  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.newsUpdate()
  //   console.log("from next")
  // }

  fetchMoreData = async () => {
    const { country, category, pageSize, apiKey } = this.props
    this.setState({ page: this.state.page + 1 })

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`
    // this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })
  }
  render() {
    return (
      <div style={{backgroundImage: `url(${this.props.backgroundColor})`,opacity:"0.3px"}}>
        <br />
        <br />
        <br />
        <h2 className="text-center " style={{ margin: "0px 20px 0px 20px", backgroundColor: "red", borderRadius: "10px", color: "white",padding:"3px 0px 3px 0px", boxShadow: "2px 2px  lightgrey" }}>Top {this.makeCapitalFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return <div className="col-md-4" key={index}>
                  {/* <NewsItem title={e.title ? e.title.slice(0, 45) : ""} descreption={e.description ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage} newsUrl={e.url} /> */}
                  <NewsItem title={element.title} descreption={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
          </div> */}
      </div>
    );
  }
}


//my-3 marging from top medium devices mai yah 4 divices lay lagi . we have total 12 grads in Bootstraps
//we are returning div so we need to give key to div
