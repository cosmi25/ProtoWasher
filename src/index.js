import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Home from './components/Home/Home';
import Research1 from './components/Research/Research1'
import Research2 from './components/Research/Research2'
import About from './components/About'
import Prototype from './components/Prototype'
import Navbar from './components/Navbar'
import Bibliography from './components/Bibliography';

ReactDOM.render(

<Router>
  {/* <Nav></Nav> */}
  <Navbar></Navbar>
  <Route exact path="/" component={About}></Route>
  <Route path='/research1' component={Research1}></Route>
  <Route path='/research2' component={Research2}></Route>
  {/* <Route path='/about' component={About}></Route> */}
  <Route path='/prototype' component={Prototype}></Route>
  <Route path='/bibliography' component={Bibliography}></Route>
</Router>, document.querySelector('#root'));


