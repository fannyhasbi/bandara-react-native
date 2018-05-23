import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class BandaraScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_bandara = [
        {
          nama: 'Bandar Udara Soekarno Hatta',
          tempat: 'Jakarta'
        },
        {
          nama: 'Bandar Udara Ahmad Yani',
          tempat: 'Semarang'
        }
      ];
    }
  }

  render(){
    return (
      <View>
        <Text style={styles.header}>Daftar Bandara</Text>
        
        <List>
        {
          this.state.map((l, i)) => (
            <ListItem
              key={i}
              title={l.nama}
              subtitle={l.tempat}
            />
          );
        }
        </List>
      </View>
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