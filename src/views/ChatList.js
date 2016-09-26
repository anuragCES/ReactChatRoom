import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import { sendMessage } from './../data/MessageData'

class ChatList extends Component {
  componentDidMount () {

  }

  componentDidUpdate (props) {
    console.log('componentDidUpdate')
    console.log(props)
  }

  render () {
    console.log(Message);
    return (
      <div>
        <h1>Messages</h1>
        <ul>
          {
            this.props.messages.map((message) =>
              <Message message={message} />
            )
          }
        </ul>
      </div>
    )
  }
}

ChatList.defaultProps = {
  messages: [
    {
      username: "ironman",
      text: "I'm ironman the suit and I are one",
      timestamp: new Date(2016, 9, 25)
    },
    {
      username: "batman",
      text: "I'm batman the suit and I are one",
      timestamp: new Date(2016, 9, 24)
    },
    {
      username: "superman",
      text: "I'm superman the suit and I are one",
      timestamp: new Date(2016, 9, 23)
    }
  ]
}

const mapPropsToState = (state, ownProps) => {
  console.log('mapPropsToState');
  console.log(state)
  const { messages, inProgress } = state
  return {
    messages,
    inProgress,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage)
    }
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(ChatList)
