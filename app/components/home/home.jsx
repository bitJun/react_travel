import React from 'react'
import {Link} from 'react-router-dom'
import Item from './item.jsx'

class Home extends React.Component {
  render () {
    return (
      <ul>
        <Item />
      </ul>
    )
  }
}
export default Home;