import React from 'react'
import {
  Link
} from 'react-router-dom';
import './account.scss';

class AccountNav extends React.Component {
  constructor (props) {
    super (props); 
    this.state = {
      orderId: '755521',
      varieties: 'USDEUR',
      type: 1,
      volume: '200.00',
      O_price: '1.52302',
      E_price: '1.52302',
      O_time: '2017-10-10 13:33:33',
      E_time: '2017-10-10 13:33:33',
      stop: '1.52302',
      profit: '0.12345',
      commission: '0.00',
      interest: '2.10',
      yprofit: '40.00'
    }
  }
  render () {
    return (
      <div className="account_view">
        <div className="main_content">
          <h4>交易报表</h4>
          <div className="list">
            <table>
              <thead>
                <tr>
                  <td style={{width: '120px'}}>订单号</td>
                  <td style={{width: '100px'}}>品种</td>
                  <td style={{width: '80px'}}>类型</td>
                  <td style={{width: '80px'}}>交易量</td>
                  <td style={{width: '100px'}}>开/平仓价</td>
                  <td style={{width: '150px'}}>开仓时间</td>
                  <td style={{width: '150px'}}>平仓时间</td>
                  <td style={{width: '80px'}}>止损</td>
                  <td style={{width: '80px'}}>止盈</td>
                  <td style={{width: '80px'}}>佣金</td>
                  <td style={{width: '80px'}}>利息</td>
                  <td style={{width: '100px'}}><p>盈利</p></td>
                </tr>
              </thead>
              <tbody v-if="json.length > 0">
                <tr v-for="item in json">
                  <td style={{width: '120px'}}>{this.state.orderId}</td>
                  <td style={{width: '100px'}}>{this.state.varieties}</td>
                  <td style={{width: '80px'}}>
                    买入<img src='./images/left.png' />
                  </td>
                  <td style={{width: '80px'}}>{this.state.volume}</td>
                  <td style={{width: '100px'}}>
                    <p>{this.state.O_price}</p>
                    <p>{this.state.E_price}</p>
                  </td>
                  <td style={{width: '150px'}}>{this.state.O_time}</td>
                  <td style={{width: '150px'}}>{this.state.E_time}</td>
                  <td style={{width: '80px'}}>{this.state.stop}</td>
                  <td style={{width: '80px'}}>{this.state.profit}</td>
                  <td style={{width: '80px'}}>{this.state.commission}</td>
                  <td style={{width: '80px'}}>{this.state.interest}</td>
                  <td style={{width: '100px'}} className="profit">
                    <p>{this.state.yprofit}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="total clearfix" v-if="json.length > 0">
              <p style={{width: '300px'}}>合计</p>
              <p style={{width: '640px'}}>200.00</p>
              <p style={{width: '80px'}}>0.00</p>
              <p style={{width: '80px'}}>2.10</p>
              <p style={{width: '50px', paddingRight: '50px', textAlign: 'right'}}>40.00</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AccountNav;