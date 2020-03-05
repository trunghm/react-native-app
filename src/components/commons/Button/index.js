import React, {Component} from 'react';
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function Button({onPress = ()=>{}, text ="", round, disabled, full} = {}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[full ? styles().fullType : styles().wrap, styles().general, round && styles().round]}
    >
      <Text style={styles().text}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}





