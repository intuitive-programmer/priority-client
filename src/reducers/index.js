import { combineReducers } from 'redux'

import NotesReducer from './NotesReducer'
import VotesReducer from './VotesReducer'
import ActionStepsReducer from './ActionStepsReducer'
import SessionReducer from './SessionReducer';

const rootReducer = combineReducers({
  currentSession: SessionReducer,
  notes: NotesReducer,
  votes: VotesReducer,
  actionSteps: ActionStepsReducer
})

export default rootReducer