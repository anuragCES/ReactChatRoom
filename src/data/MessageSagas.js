import { inProgress,
          sendMessageSuccess,
          sendMessageFailed } from './MessageData'
import { call, put, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

export function* rootSaga () {
  yield fork(watchSendMessage)
}

function* sendMessage(action) {
  console.log(action)
  try {
    yield put(inProgress({}))
    yield sending()
    yield put(sendMessageSuccess({}))
  } catch (e) {
    console.error(e)
    yield put(sendMessageFailed({}))
  }
}

function sending () {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { // simulate some delay
      resolve(); // control should return to generator here
    }, 1000);
  })
}

function* watchSendMessage() {
  yield* takeEvery('SEND_MESSAGE', sendMessage)
}
