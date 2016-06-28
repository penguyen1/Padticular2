import {
  SHOW_APTS,
  ADD_APT,
  REMOVE_APT
} from '../actions/index'

export default function aptsReducer(state = [], action) {
  console.log('apts.js reducer: ', action)

  switch (action.type) {
    case SHOW_APTS:
      // return state.map(apt => )
      return [
        ...state,
        {
          text: action.text,
          apts: action.apts
        }
      ]
    case ADD_APT:
      return [
        ...state,
        {
          text: action.text,
          id: action.id
        }
      ]
    case REMOVE_APT:
      return [
        ...state,
        {
          text: action.text,
          id: action.id
        }
      ]
    default:
      return state
  }
}



// const initialState = {
//   onlineList: [],
//   offlineList: [],
//   connectionChecked: false
// }

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