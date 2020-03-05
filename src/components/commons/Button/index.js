import React, {Component} from 'react';
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function Button({onPress, text, isShowRadiusButton, disabled}) {
  const radiusStyle = isShowRadiusButton ? styles().radiusButton : {};
  return (
    <View style={styles().container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles().buttonWrapper, disabled ? styles().disabled : null, radiusStyle]}
      >
        <Text style={styles().text}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>);
}


