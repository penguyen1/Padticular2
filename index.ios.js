// import React, { Component } from 'react'
// import { AppRegistry } from 'react-native'
// import { Provider } from 'react-redux'
// //import App from './src/containers/App'
// import configureStore from './src/store/index'

// const store = configureStore()

// class Padticular2 extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <App />
//       </Provider>
//     )
//   }
// }
// AppRegistry.registerComponent('Padticular2', () => Padticular2)



// ATTENTION!!
// Code was provided by Aksonov's React-Native-Redux-Router
// URL - https://github.com/aksonov/react-native-redux-router/blob/master/Example/index.ios.js

'use strict';
// var React = require('react-native');
// var { AppRegistry, StyleSheet, Text, View } = React;
var Launch = require('./src/testComponents/Launch');
var Register = require('./src/testComponents/Register');
var Login = require('./src/testComponents/Login');
var {NavBar, NavBarModal} = require('./src/testComponents/NavBar');
var Error = require('./src/testComponents/Error');
var Home = require('./src/testComponents/Home');
var { Router, routerReducer, Route, Container, Animations, Schema } = require('react-native-redux-router');

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

const loggerMiddleWare = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare)(createStore);
const reducer = combineReducers({routerReducer});
let store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
        <Router>
          <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
          <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
          <Schema name="withoutAnimation" navBar={NavBar}/>
          <Schema name="tab" navBar={NavBar}/>

          <Route name="launch" component={Launch} initial={true} hideNavBar={true} title="Launch"/>
          <Route name="register" component={Register} title="Register"/>
          <Route name="home" component={Home} title="Home" type="replace"/>
          <Route name="login" component={Login} schema="modal"/>
          <Route name="register2" component={Register} schema="withoutAnimation"/>
          <Route name="error" component={Error} schema="popup"/>
        </Router>
      </View>
    );
  }
}
class Padticular2 extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Padticular2', () => Padticular2);

