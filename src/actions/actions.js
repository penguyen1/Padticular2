import offline from 'react-native-simple-store'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SHOW_APTS = 'SHOW_APTS'
export const ADD_APT = 'ADD_APT'
export const REMOVE_APT = 'REMOVE_APT'
// export const VIEW_APT = 'VIEW_APT'
// export const SEARCH_RESULTS = 'SEARCH_RESULTS'

export function createUser(userData) {
  return {
    type: CREATE_USER,
    userData: userData
  }
}

export function loginUser(userData) {
  return {
    type: LOGIN_USER,
    userData: userData
  }
}

export function logoutUser(userData) {
  return {
    type: LOGOUT_USER,
    userData: userData
  }
}

export function addApt(apt_id) {
  return {
    type: ADD_APT,
    id: apt_id
  }
}

export function removeApt(apt_id) {
  return {
    type: REMOVE_APT,
    id: apt_id
  }
}

function favsLoaded(apts) {
  return {
    type: SHOW_APTS,
    apts: apts
  }
}

export function showApts() {
  return dispatch => {
    offline.get('apts').then(apts => {
      dispatch(favsLoaded(apts || []))
    })
  }
}

// export function showApts(uid) {
//   return {
//     type: SHOW_APTS,
//     uid: uid
//   }
// }

// export function viewApt(apt_id) {
//   return {
//     type: VIEW_APT,
//     id: apt_id
//   }
// }

// function resultsLoaded(results) {
//   return {
//     type: SEARCH_RESULTS,
//     results: results
//   }
// }

// export function showSearchResults() {
//   return dispatch => {
//     offline.get('results').then(results => {
//       dispatch(resultsLoaded(results || []))
//     })
//   }
// }










// NECESSARY ??

// export const OFFLINE_ITEMS_LOADED = 'OFFLINE_ITEMS_LOADED'
// export const CONNECTION_CHECKING = 'CONNECTION_CHECKING'
// export const CONNECTION_CHECKED = 'CONNECTION_CHECKED'
// export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
// export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'

// function offlineItemsLoaded(items) {
//   return {
//     type: OFFLINE_ITEMS_LOADED,
//     items: items
//   }
// }

// export function loadOfflineItems() {
//   return dispatch => {
//     offline.get('items').then(items => {
//       dispatch(offlineItemsLoaded(items || []))
//     })
//   }
// }

// export function checkConnection() {
//   return dispatch => {
//     dispatch({type: CONNECTION_CHECKING})
//     setTimeout(() => dispatch({type: CONNECTION_CHECKED}), 5000)
//   }
// }

// export function goOnline() {
//   return {
//     type: CONNECTION_ONLINE
//   }
// }

// export function goOffline() {
//   return {
//     type: CONNECTION_OFFLINE
//   }
// }