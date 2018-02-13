import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    // console.log("params to handleNewMessage in sagas/", params)
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
