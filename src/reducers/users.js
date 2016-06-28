import {
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/index'

const initialState = {
  user: {},
  userOnline: false
}

export default function userReducer(state = initialState, action) {
  console.log('users.js reducer: ', action)

  switch (action.type) {
    case CREATE_USER:
    case LOGIN_USER:
      return {
        user: 
      }
    case LOGOUT_USER:
    default:
      return state
  }
}

// export default function reducer(state = initialState, action) {
//   let list

//   console.log(action)
//   switch (action.type) {
//   case ADD_ITEM:
//     list = state.onlineList.concat([action.itemData]).sort((a, b) => b.time - a.time)

//     return {
//       ...state,
//       onlineList: list,
//       offlineList: list
//     }
//   case REMOVE_ITEM:
//     list = state.onlineList.slice(0)
//     const index = list.map(i => i.id).indexOf(action.id)
//     list.splice(index, 1)

//     return {
//       ...state,
//       onlineList: list,
//       offlineList: list
//     }
//   case OFFLINE_ITEMS_LOADED:
//     return {
//       ...state,
//       offlineList: action.items,
//       offlineLoaded: true
//     }
//   case CONNECTION_CHECKING:
//     return {
//       ...state,
//       connectionChecked: false
//     }
//   case CONNECTION_CHECKED:
//     return {
//       ...state,
//       connectionChecked: true
//     }
//   case CONNECTION_ONLINE:
//     return {
//       ...state,
//       connectionChecked: true,
//       connected: true
//     }
//   case CONNECTION_OFFLINE:
//     return {
//       ...state,
//       connectionChecked: true,
//       connected: false
//     }
//   default:
//     return state
//   }
// }