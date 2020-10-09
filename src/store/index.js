import stateA from './reducer-a'
import stateB from './reducer-b'

import { combineReducers } from 'redux'
import { createStore } from 'redux'

const reducer = combineReducers({ stateA, stateB })
const store = createStore(reducer)

export default store