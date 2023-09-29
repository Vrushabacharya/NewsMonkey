import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";



export class App extends Component {
  render() {
   
    return (
      
      
      <BrowserRouter basename='/NewsTiger'>
        <Router>
           <Navbar/>
          <Switch>
          <Route exact  path="/">
             <News key="general" category="general" />
          </Route>
          <Route exact  path="/science">
             <News key="science" category="science"/>
          </Route>
          <Route exact  path="/Entertainment">
             <News key="Entertainment" category="Entertainment"/>
          </Route>
          <Route exact  path="/technology">
             <News key="technology" category="technology"/>
          </Route>
          <Route exact  path="/bussiness">
             <News key="bussiness" category="bussiness"/>
          </Route>
          <Route exact  path="/health">
             <News key="health" category="health"/>
          </Route>
          <Route exact  path="/politics">
             <News key="politics" category="politics"/>
          </Route>
          <Route exact  path="/sports">
             <News key="sports" category="sports"/>
          </Route>
        </Switch>
          <div>
          
       
      </div>
      </Router>
      </BrowserRouter>
    )
  }
}

export default App
