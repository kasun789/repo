import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Student from './components/Student'
export default class App extends Component {
  render() {
    return (
      <Router>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<Student />}></Route>
                    
                </Routes>
            </div>
            <div className='container'>
            <Routes>
                    <Route exact path='/' element={<Student />}></Route>
                    
                </Routes>
            </div>
            
        </Router>
        
      
    )
  }
}
