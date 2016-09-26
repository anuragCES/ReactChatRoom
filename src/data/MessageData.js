export const CONSTANTS = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  IN_PROGRESS: 'IN_PROGRESS',
  MESSAGE_SENT: 'MESSAGE_SENT',
  MESSAGE_FAILED: 'MESSAGE_FAILED',
}

export function sendMessage (data) {
  return {
    type: CONSTANTS.SEND_MESSAGE,
    data
  }
}

export function sendMessageSuccess (data) {
  return {
    type: CONSTANTS.MESSAGE_SENT,
    data
  }
}

export function sendMessageFailed (data) {
  return {
    type: CONSTANTS.MESSAGE_FAILED,
    data
  }
}

export function inProgress (data) {
  return {
    type: CONSTANTS.IN_PROGRESS,
    data
  }
}

// Initial state
const initialState = {
  messages: [],
  inProgress: false,
}

// Reducers
export function messageReducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CONSTANTS.MESSAGE_SENT:
      return {...state, ...action.data, inProgress: false}
    case CONSTANTS.MESSAGE_FAILED:
      return {...state, ...action.data, inProgress: false}
    case CONSTANTS.IN_PROGRESS:
      return {...state, inProgress: true}
    default:
      return state
  }
}
