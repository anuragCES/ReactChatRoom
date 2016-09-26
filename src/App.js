import React, { Component } from 'react'
import './App.css'
import ChatRoom from './views/ChatRoom'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatRoom />
      </Provider>
    );
  }
}

export default App;
