import { combineReducers } from 'redux'

import NotesReducer from './NotesReducer'

const rootReducer = combineReducers({
  notes: NotesReducer
})

export default rootReducer