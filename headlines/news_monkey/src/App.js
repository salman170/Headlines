import React, { Component } from 'react'
import { Navbar } from './Components/Navbar';
import News from './Components/News';
import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 20
  apiKey = "dc124909d5bb4701b5dcf8975aff2be8"
  
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
            <Route exact path='/' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="general" country='in' category="general" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="business" country='in' category="business" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="health" category="health" />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="science" category="science" />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="technology" category="technology" />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="entertainment" category="entertainment" />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' apiKey={this.apiKey} key="sports" category="sports" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

