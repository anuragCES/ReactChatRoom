import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from './../data/MessageData'

class ChatBox extends Component {

  constructor (props, context) {
    super(props, context)

    // Init state
    this.state = {
      newMessage: '',
    }

    // Bindings
    this.textOnChange = this.textOnChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  textOnChange (event) {
    this.setState({
      newMessage: event.target.value
    })
  }

  sendMessage (event) {
    event.preventDefault()
    this.props.sendMessage(this.state.newMessage)
    // Post message action
    this.setState({
      newMessage: ''
    })
  }

  render () {
    return (
      <div className='chat-box'>
        <div className='flexbox-button-icon'>
          +
        </div>
        <div style={{flexGrow: 2}}>
          <input
            style={{width: '100%'}}
            placeholder='write new message'
            onChange={this.textOnChange}
            value={this.state.newMessage}
          />
        </div>
        <div style={{flexGrow: 1}}>
          <button
            style={{float: 'right'}}
            onClick={this.sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage())
    }
  }
}

export default connect(
  (state, ownProps) => state,
  mapDispatchToProps
)(ChatBox)
