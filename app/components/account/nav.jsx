import React from 'react'
import {
  Link
} from 'react-router-dom';
import './nav.scss';

class AccountNav extends React.Component {
  render () {
    return (
      <div className="filiter_view">
        <ul className="menu clearfix">
          <li>
            <Link to="/account/history" exact>交易报表</Link>
          </li>
          <li>
            <Link to="/account/deposit" exact>在线入金</Link>
          </li>
          <li>
            <Link to="/account/withdraw" exact>申请出金</Link>
          </li>
          <li>
            <Link to="/account/transfer" exact>转账汇款</Link>
          </li>
          <li>
            <Link to="/account/depositrecord" exact>资金流水</Link>
          </li>
          <li>
            <Link to="/account/changepwd" exact>修改密码</Link>
          </li>
          <li>
            <Link to="/account/adjustlever" exact>调整杠杆</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default AccountNav;