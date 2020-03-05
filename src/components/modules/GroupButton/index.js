import React, {Component} from 'react';
import styles from "./styles";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Button} from "../../commons";

export default function GroupButton({index, data, onSelect}) {
  return (
    <View style={styles().container}>
      {
        data.map((title, _index) => {
          const status = index === _index ? "active" : "deactive";
          return <Button text={title} disabled={status === "active" ? false : true} onPress={() => {
            onSelect(_index);
          }}/>
        })
      }
    </View>);
}


