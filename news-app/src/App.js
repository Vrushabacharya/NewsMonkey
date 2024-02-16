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
      
      
      <BrowserRouter basename='/NewsMonkey'>
        <Router>
           <Navbar/>
          <Switch>
          <Route exact  path="/">
             <News key="general" country="in" category="general" />
          </Route>
          <Route exact  path="/science">
             <News key="science" country="in"  category="science"/>
          </Route>
          <Route exact  path="/Entertainment">
             <News key="Entertainment" country="in"  category="Entertainment"/>
          </Route>
          <Route exact  path="/technology">
             <News key="technology" country="in"  category="technology"/>
          </Route>
          <Route exact  path="/business">
             <News key="bussiness" country="in"  category="business"/>
          </Route>
          <Route exact  path="/health">
             <News key="health" country="in"  category="health"/>
          </Route>
          <Route exact  path="/politics">
             <News key="politics" country="in"  category="politics"/>
          </Route>
          <Route exact  path="/sports">
             <News key="sports" country="in"  category="sports"/>
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
