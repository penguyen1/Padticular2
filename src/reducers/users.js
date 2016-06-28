
const initialState = {
  user: {},
  online: false
}

 const users = (state = initialState, action) => {
  console.log('users reducer action: ', action)

  switch (action.type) {
    case CREATE_USER:
      console.log('user reducer - creating user')
      return Object.assign({}, state, {
        user: action.userData
      })
    case LOGIN_USER:
      console.log('user reducer - login user/set user info')
      return {
        user: action.userData,
        online: true
      }
    case LOGOUT_USER:
      console.log('user reducer - logout user/empty user info {}')
      return {
        user: {},
        online: false
      }
    default:
      console.log('user reducer - N/A')
      return state
  }
}

export default users