const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case '':
      return {}

    default:
      return state
  }
}
