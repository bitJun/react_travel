import React from 'react'
import cors from 'cors'
import {Link} from 'react-router-dom'
import './item.scss'

class Item extends React.Component {
  constructor (props) {
    super (props);
  };
  componentWillMount () {
    let url = 'http://127.0.0.1:8090/chugui-web/baseData/allPodWithRoute';
    // let myHeaders = new Headers({
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json'
    // });
    // fetch(url, {
    //     method: 'GET',
    //     headers: myHeaders,
    //     mode: 'cors'
    // }) .then((res) => {
    //   console.log(res)
    // })
    let myHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    fetch(url, {
      method: 'get',
      headers: myHeaders,
      mode: 'no-cors'
    }).then(response => response)
      .then((data) => {
        console.log('data',data);  
        // this.setState({ discounts: json.data })  
      })  
      .catch((error) => {  
        console.log(error)  
      })  
    let state = []
    let data = {
      Body: "● 成都——带不走的只有你↵● 桃坪羌寨——神秘的东方古堡↵● 马尔康——阿坝州...",
      CreateTime:"/Date(1499593680420+0800)/",
      DateId: "D000000397",
      Id: 397,
      NumberPhone:"",
      NumberQQ:"",
      NumberWX:"",
      PathId:"P000000001033",
      PhotoList:"",
      PlayTimeEnd:"/Date(1500667200000+0800)/",
      PlayTimeStart:"/Date(1500062400000+0800)/",
      SeqNumber:1,
      SharePage:null,
      SiteIdEnd:"E1000103",
      SiteIdStart:"C000",
      SiteNameEnd:"色达•亚丁",
      SiteNameStart:"不限",
      Status:true,
      TotalCollectNumber:0,
      TotalCommentNumber:1, 
      TotalDateNumber:0,
      TotalVisitNumber:185,
      UserId:"U0000000057",
      UserName:"高级梦想家"
    }
    for (let i = 0; i < 10; i++) {
      state.push(data);
      this.state = state;
    }
  };
  render () {
    var tools = [];
    for( let i = 0; i < this.state.length; i++ ){
      tools.push(
        <li id="111" className="item" key={i}>
          <a>
            <div className="user clearfix">
              <img src="http://139.224.52.136:1590/Image/A/131425504181339534910.jpg" className="pull-left user_logo" />
              <div className="user_info">
                <p data-pid="U0000000057">高级梦想家<span className="pull-right">159天前</span></p>
                <span className="age woman">
                  <img src="images/woman@3x.png" />18
                </span>
              </div>
            </div>
            <div className="Route clearfix">
              {this.state[i].SiteNameEnd + i}
              <span className="pull-right togroom" data-pid="P000000001033" data-start="不限" data-end="色达•亚丁">推荐路线</span>
            </div>
            <p className="start_day clearfix">
              <span className="pull-left" data-pid="c000">出发日期：2017-7-15</span>
              <span className="pull-right" data-pid="E1000103">结束日期：2017-7-22</span>
            </p>
            <div className="discribe">
              ● 成都——带不走的只有你
              ● 桃坪羌寨——神秘的东方古堡
              ● 马尔康——阿坝州...
            </div>
            <div className="operate clearfix">
              <img src="images/message@3x.png" className="pull-left leave_message" />
              <p className="pull-left msg_num">1</p>
              <span className="pull-right visit_num">已约0人</span>
            </div>
          </a>
        </li>
      );
    };
    return (
      tools
    )
  }
}
export default Item;