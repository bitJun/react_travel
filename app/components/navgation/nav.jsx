import React from 'react'
import {
  Link
} from 'react-router-dom';
import AccountNav from './nav.jsx';
import './nav.scss';

class Navgation extends React.Component {
  render () {
    return (
      <div>
        <div className="top_view clearfix">
          <div className="main">
            <a className="logo pull-left">Spire Trader</a>
            <ul className="navbar pull-right clearfix">
              <li>
                <Link to="/" className="item">账户总览</Link>
              </li>
              <li>
                <Link to="/account/history" className="item">账户管理</Link>
              </li>
              <li>
                <a className="item">开户申请</a>
              </li>
              <li>
                <a className="item">账户资料</a>
              </li>
              <li>
                <a className="item">用户资料</a>
              </li>
              <li>
                <a to="/" className="user">杭州装修</a>
              </li>
              <li className="exit">
                <a>
                  <i className="iconfont icon-tuichu"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Navgation;