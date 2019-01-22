import { combineReducers } from 'redux'

import NotesReducer from './NotesReducer'
import VotesReducer from './VotesReducer'
import ActionStepsReducer from './ActionStepsReducer'

const rootReducer = combineReducers({
  notes: NotesReducer,
  votes: VotesReducer,
  actionSteps: ActionStepsReducer
})

export default rootReducer