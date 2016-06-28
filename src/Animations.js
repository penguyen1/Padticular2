// ATTENTION!!
// Code was provided by Aksonov's React-Native-Redux-Router
// URL - https://github.com/aksonov/react-native-redux-router/blob/master/Animations.js

'use strict';

// Scene Config
var { Navigator, Dimensions, PixelRatio } = require('react-native')
var buildStyleInterpolator = require('react-native/Libraries/Utilities/buildStyleInterpolator')
var FlatFloatFromRight = Object.assign({}, Navigator.SceneConfigs.FloatFromRight)
var FlatFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom)
FlatFloatFromRight.gestures = {}

var FlatFadeToTheLeft = {
  transformTranslate: {
    from: {x: 0, y: 0, z: 0},
    to: {x: -Math.round(Dimensions.get('window').width * 0.3), y: 0, z: 0},
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
  opacity: {
    from: 1,
    to: 0.3,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
  translateX: {
    from: 0,
    to: -Math.round(Dimensions.get('window').width * 0.3),
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
};

var FlatFadeToTheUp = {
  opacity: {
    value: 1.0,
    type: 'constant',
  },
  translateY: {
    from: 0,
    to: -Math.round(Dimensions.get('window').height * 0.3),
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
};

FlatFloatFromBottom.animationInterpolators.out = buildStyleInterpolator(FlatFadeToTheUp);
FlatFloatFromRight.animationInterpolators.out = buildStyleInterpolator(FlatFadeToTheLeft);

var None = {
  gestures: {},

  // Rebound spring parameters when transitioning FROM this scene
  springFriction: 0,
  springTension: 2000,

  // Velocity to start at when transitioning without gesture
  defaultTransitionVelocity: 1.5,

  // Animation interpolators for horizontal transitioning:
  animationInterpolators: {
    into: buildStyleInterpolator(FlatFadeToTheUp),
    out: buildStyleInterpolator(FlatFadeToTheUp),
  },
};

module.exports = { FlatFloatFromRight, FlatFloatFromBottom, None };