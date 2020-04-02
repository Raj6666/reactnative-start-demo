/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

class FlexBoxLayout extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>FlexBox布局实例</Text>
        <View style={styles.flexBox}>
          <View style={[styles.items, {flex: 1}]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.items, {flex: 1}]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.items, {flex: 2}]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.items, {flex: 2}]}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'darkgray',
    marginTop: 20,
    height: 400,
  },
  items: {
    width: 50,
    height: 50,
    backgroundColor: 'darkcyan',
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default FlexBoxLayout;
