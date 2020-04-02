/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

class CountDown extends Component {
  state = {
    count: 5,
  };
  add = time => {
    this.setState({
      count: this.state.count + time,
    });
  };
  render() {
    const {count} = this.state;
    return <Text>{count}</Text>;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const {count} = this.state;
      if (count === 0) {
        this.props.timeup('时间到啦~~');
        return clearInterval(this.timer);
      }
      this.setState({
        count: count - 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

class Timer extends Component {
  state = {
    timers: [1, 2, 3, 6],
  };
  handlePress = () => {
    this.countDown.add(10);
  };

  // 单独组件回调函数
  handleTimeup = msg => {
    Alert.alert('子组件数据：' + msg);
  };

  // 动态组件回调函数
  // handleTimeup = (timerId, msg) => {
  //   Alert.alert('父组件数据：' + timerId + '  ' + '子组件数据：' + msg);
  // };

  render() {
    return (
      <View>
        <Text style={styles.title}>定时器示例 —— 组件间通信</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>按我加10秒</Text>
        </TouchableOpacity>
        <CountDown
          timeup={this.handleTimeup}
          ref={countDown => {
            this.countDown = countDown;
          }}
        />
        {/* <Text>动态生成计时器</Text>
        {this.state.timers.map(timer => {
          return (
            <CountDown
              key={timer}
              timeup={msg => this.handleTimeup(timer, msg)}
            />
          );
        })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
  },
});

export default Timer;
