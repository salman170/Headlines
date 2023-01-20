import React, { Component } from 'react'
import { Navbar } from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News pageSize={20} key="general" country='in' category="general" />} />
            <Route exact path='/business' element={<News pageSize={20} key="business" country='in' category="business" />} />
            <Route exact path='/health' element={<News pageSize={20} country='in' key="health" category="health" />} />
            <Route exact path='/science' element={<News pageSize={20} country='in' key="science" category="science" />} />
            <Route exact path='/technology' element={<News pageSize={20} country='in' key="technology" category="technology" />} />
            <Route exact path='/entertainment' element={<News pageSize={20} country='in' key="entertainment" category="entertainment" />} />
            <Route exact path='/sports' element={<News pageSize={20} country='in' key="sports" category="sports" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

