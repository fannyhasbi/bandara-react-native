import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

export default class Title extends React.Component {
  render(){
    return (
      <View style={styles.header}>
        <Text h3>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  }
})