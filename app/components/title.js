import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Text} from 'react-native-elements';

export default class Title extends React.Component {
  render(){
    return (
      <Text style={styles.header}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
});