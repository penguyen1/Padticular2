'use strict';

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
var Button = require('react-native-button');

class Error extends Component {
    render(){
        let Actions = this.props.routes;
        return (
            <View style={{width:300,height:300,justifyContent: 'center',
        alignItems: 'center',backgroundColor:'white'}}>
                <Text>{this.props.data}</Text>
                <Button onPress={Actions.dismiss}>Close</Button>
            </View>
        );
    }
}


module.exports = Error;