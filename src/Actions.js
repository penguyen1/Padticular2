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
    text: 'creating new user',
    userData: userData
  }
}

export function loginUser(userData) {
  return {
    type: LOGIN_USER,
    text: 'logging in user',
    userData: userData
  }
}

export function logoutUser(userData) {
  return {
    type: LOGOUT_USER,
    text: 'logging out user',
    userData: userData
  }
}

export function addApt(id) {
  return {
    type: ADD_APT,
    text: 'adding apt to favs',
    id: id
  }
}

export function removeApt(id) {
  return {
    type: REMOVE_APT,
    text: 'removing apt from favs',
    id: id
  }
}

function favsLoaded(apts) {
  return {
    type: SHOW_APTS,
    text: 'loading apt favs',
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

// export function viewApt(id) {
//   return {
//     type: VIEW_APT,
//     id: id
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