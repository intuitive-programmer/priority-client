import { combineReducers } from 'redux'

import NotesReducer from './NotesReducer'
import VotesReducer from './VotesReducer'

const rootReducer = combineReducers({
  notes: NotesReducer,
  votes: VotesReducer
})

export default rootReducer