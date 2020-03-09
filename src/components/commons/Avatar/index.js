import React, {Component} from 'react';
import styles from "./styles";
import {
  Text,
  View,
  Image
} from 'react-native';

export default function Avatar({url, text}) {
  return (
    <View style={styles().container}>
      <Image style={styles().circle}/>
      <Text style={styles().text}>{text}</Text>
    </View>);
}

export class Document {

  static key ="Avatar"

  static render = Avatar

  static demo = {
    selection :[],
    options :[],
    input :[{name :"url"},{name :"text"}]
  }
}


