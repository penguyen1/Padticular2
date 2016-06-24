'use strict';
var React = require('react-native');
var { StyleSheet, Text, TouchableHighlight, View } = React;
var Button = require('react-native-button');
var { Actions } = require('react-native-redux-router');

// Initial component page the user will see 
class Intro extends React.Component {
  render() {
    // var Actions = this.props.routes;      // console.log this.props.routes (what data/routes is inside?)
    
    return (
      <View style={styles.container}>
        <Text>Welcome to Padticular!</Text>
        <Text>Discovering beautiful rental abodes with the swipe of a finger</Text>
      </View>
    );
  }
}

// Original Version
// class Intro extends React.Component {
//   render() {
//     var Actions = this.props.routes;      // console.log this.props.routes (what data/routes is inside?)
    
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to Padticular!</Text>
//         <Text>Discovering beautiful rental abodes with the swipe of a finger</Text>
//         <Button onPress={ ()=>Actions.login({ data:"Custom data", title:"Custom title" })}> Login </Button>
//         <Button onPress={Actions.signup}> New Member? </Button>
//       </View>
//     )
//   }
// }

// Styling for Intro component page
var styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

module.exports = Intro;