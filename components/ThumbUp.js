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
import PropTypes from 'prop-types';

class ThumbUp extends React.Component {
  state = {
    likes: 0,
  };

  onPressCallback = () => {
    const {likes} = this.state;
    this.setState({
      likes: likes + 1,
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>
          点赞示例 —— props,state —— 基础点击事件
        </Text>
        <TouchableOpacity onPress={this.onPressCallback}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573034610789&di=1bbdfa87933fdf16d60c84b4448701a5&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F07%2F02%2F56980234137c3b1a4fc26e860afae85a.jpg',
            }}
          />
        </TouchableOpacity>
        <Text>{this.state.likes}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default ThumbUp;
