import { SET_PLATFORM } from '../actions/types'

const initialState = {
  platform: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_PLATFORM:
      return {
        ...state,
        platform: action.platform
      }

    default:
      return state
  }
}
