
const apt = (state, action) => {
  console.log('apt reducer action: ', action)

  switch(action.type) {
    case 'SHOW_APTS':
      console.log('apt SHOW_APTS')
    case 'ADD_APT':
      console.log('apt ADD_APT')
      return {
        id: action.id,
        text: action.text,
        saved: true
      }
    case 'REMOVE_APT':
      console.log('apt REMOVE_APT')
      if(state.id === action.id) {
        return Object.assign({}, state, {
          saved: !state.saved                   // changes true to false
        })
      } 
      return state
    default:
      console.log('apt reducer - N/A')
      return state
  }
}

const apts = (state = [], action) => {
  console.log('aptS reducer action: ', action)
  
  switch(action.type) {
    case 'SHOW_APTS':
      console.log('aptS SHOW_APTS')
      return state.map(apt => {
        // return apt.saved ? apt : {}
        if(apt.saved) {
          return apt                            // adds only if apt.saved = true
        }
      })
    case 'ADD_APT':
      console.log('aptS ADD_APT')
      return [
        ...state,
        apt(undefined, action)
      ]
    case 'REMOVE_APT':
      console.log('aptS REMOVE_APT')
      return state.map(x => apt(x, action))
    default:
      console.log('aptS reducer - N/A')
      return state
  }
}

export default apts

