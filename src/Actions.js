import offline from 'react-native-simple-store'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SHOW_APTS = 'SHOW_APTS'
export const ADD_APT = 'ADD_APT'
export const REMOVE_APT = 'REMOVE_APT'
// export const VIEW_APT = 'VIEW_APT'
// export const SEARCH_RESULTS = 'SEARCH_RESULTS'
export const PUSH = 'PUSH';
export const POP = 'POP';
export const DISMISS = 'DISMISS';
export const RESET = 'RESET'
export const INIT = 'INIT'
export const CUSTOM = 'CUSTOM'
export const REPLACE = 'REPLACE'
export const SELECT = 'SELECT'

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




// ATTENTION!!
// Code was provided by Aksonov's React-Native-Redux-Router
// URL - https://github.com/aksonov/react-native-redux-router/blob/master/actions.js

function filterParam(data) {
  if(typeof(data) != 'object') {
    return data
  }
  if(!data) { return }

  var proto = (data||{}).constructor.name        // avoid passing React Native parameters
  if(proto != 'Object') { 
    data = {}
  }
  if(data.data) {
    data.data = filterParam(data.data)
  }
  return data
}

let CoreActions = {
  push: function(data) {
    return {
      ...filterParam(data),       // is there a space betw ... filterParam??
      type: PUSH
    }
  },
  pop: function(data = {}) {
    return {
      ...filterParam(data),
      type: POP
    }
  },
  dismiss: function(data) {
    return {
      ...filterParam(data),
      type: DISMISS
    }
  },
  reset: function(initial) {
    if(!initial) {
      throw new Error("Param should be non-empty")
    }
    return {
      initial,
      type: RESET
    }
  },
  init: function(initial) {
    return {
      initial,
      type: INIT
    }
  },
  custom: function(data) {
    return {
      ... filterParam(data),
      type: CUSTOM
    }
  },
  replace: function(data) {
    return {
      ... filterParam(data),
      type: REPLACE
    }
  },
  select: function(data) {
    return {
      ... filterParam(data),
      type: SELECT
    }
  }
}

let Actions = {... CoreActions}
export {CoreActions, Actions}