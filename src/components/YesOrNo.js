'use strict'
const React = require('react-native');
const Button = require('react-native-button');
var { 
  Dimensions, 
  Image, 
  Stylesheet, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  View 
} = React;

// Database connection to Firebase
const Firebase = require('firebase');
const userRef = new Firebase('https://dazzling-inferno-3629.firebaseio.com');
const user = userRef.child('/users'); 


// YesOrNo component - registration form for new members
class YesOrNo extends React.Component {
  render() {
    let Actions = this.props.routes;      // what info is inside this.props.routes??

    return (
      <View style={styles.container}>
        <Text>This is the YesOrNo Component</Text>
        <Button onPress={Actions.pop}>Back</Button>
      </View>
    )
  }
}


// Styling for YesOrNo page
var styles = Stylesheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = YesOrNo;