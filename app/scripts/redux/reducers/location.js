import { SET_LOCATION } from '../actions/actionTypes'

const initialState = {
  path: '',
  name: ''
}

const setLocation = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return action.location
    }
    default: {
      return state
    }
  }
}

export default setLocation