import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './assets/sass/reset.scss';
import Home from './components/home/home.jsx';
import Nav from './components/nav/nav.jsx';
import Navgation from './components/navgation/nav.jsx';
import AccountNav from './components/account/nav.jsx';
import History from './components/account/history.jsx';

const app = document.createElement('div');
app.setAttribute('id','apple')
document.body.appendChild(app);
var html=document.getElementsByTagName("html")[0];var a=html.offsetWidth/25;html.style.fontSize=a+"px";
ReactDOM.render(
  <div className="container">
    <Router>
      <div className="container">
        <Route exact path ="/" component={Home} />
        <Route path ="/account" component={AccountNav} />
        <Route path ="/account/history" component={History} />
      </div>
    </Router>
  </div>,
  document.getElementById('apple')
);