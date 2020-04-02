/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Alert, Button, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import ThumbUp from './components/ThumbUp';
import Timer from './components/Timer';
import FlexBoxLayout from './components/FlexBoxLayout';

class GoodMorning extends React.Component {
  // 静态成员变量
  static defaultProps = {
    name: 'somebody',
  };
  static propTypes = {
    name: PropTypes.string, // 约定需要的数据类型
  };
  render() {
    return <Text>Good morning, {this.props.name}</Text>;
  }
}

const GoodEvening = props => {
  return <Text>Good evening, {props.name}</Text>;
};

const App: () => React$Node = () => {
  const names = ['Raj', 'Steven', 'Mark'];
  return (
    <View>
      {/* <Text>今天天气真好你</Text>
      {names.map((name, index) => (
        <GoodMorning key={name + index} name={name} />
      ))}
      <GoodEvening name="Irving" /> */}
      {/* 点赞示例 */}
      {/* <ThumbUp /> */}
      {/* 定时器示例 */}
      {/* <Timer /> */}
      {/* FlexBox布局示例 */}
      <FlexBoxLayout />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
  },
});

export default App;
