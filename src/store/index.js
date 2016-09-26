import { createStore, applyMiddleware } from 'redux'
import { messageReducer as messages } from './../data/MessageData'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './../data/MessageSagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(messages, applyMiddleware(sagaMiddleware))
console.log(rootSaga)
// Run the Sagas
sagaMiddleware.run(rootSaga)

export default store
