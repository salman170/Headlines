import React, { Component } from 'react'
import Navbar  from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 20
  apiKey = "dc124909d5bb4701b5dcf8975aff2be8"
  // apiKey= process.env.REACT_APP_KEY

  //599109608c4545bcacd60d824290bf90
  //dc124909d5bb4701b5dcf8975aff2be8

  state = {
    progress: 0
  }
  setProgress =async (progress)=> {
    this.setState({ progress: progress })
  }


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} height={3} />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="general" country='in' category="general" backgroundColor="https://free4kwallpapers.com/uploads/originals/2019/02/27/galaxy-wallpaper.jpg" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="business" country='in' category="business" backgroundColor="https://wallpapercave.com/wp/wp2019268.jpg" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="health" category="health" backgroundColor="https://wallpaperaccess.com/full/20593.jpg"/>} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="science" category="science" backgroundColor="https://wallpaperaccess.com/full/4502486.jpg"/>} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="technology" category="technology" backgroundColor="https://wallpaperaccess.com/full/26174.png"/>} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="entertainment" category="entertainment" backgroundColor="https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg?w=2000"/>} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="sports" category="sports" backgroundColor="https://wallpaper.dog/large/10716242.jpg"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

