const ActionStepsReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_ACTION_STEPS":
    return action.actionSteps
    default:
    return state
  }
}

export default ActionStepsReducer
