import React, { PropType, Component } from 'react'
import ChatList from './ChatList'
import ChatBox from './ChatBox'

class ChatRoom extends Component {
  render () {
    return (
      <div>
        <h1>ChatRoom</h1>
        <ChatList />
        <ChatBox />
      </div>
    )
  }
}

export default ChatRoom
