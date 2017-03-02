/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Prayer extends Component {
  render() {
    return (
      <View>
      <Text style={styles.prayerHeader}>{this.props.name}</Text>
      </View>
    );
  }
}

class AwesomeProject extends Component {
render() {
    return (
      <View>
      <Prayer name="Akiba" />
      <Prayer name="Asubuhi" />
      <Prayer name="Familia" />
      <Prayer name="Jioni na usiku wa Manane" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  prayerHeader:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    backgroundColor: 'gray',
    padding:5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//AppRegistry.registerComponent('AwesomeProject',()=> AwesomeProject);
