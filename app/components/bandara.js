import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {List, ListItem} from 'react-native-elements';

import Title from './title';

export default class BandaraScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_bandara : [
        {
          nama: 'A',
          tempat: 'Jakarta'
        },
        {
          nama: 'B',
          tempat: 'Semarang'
        }
      ]
    };
  }

  render(){
    return (
      <View>
        <Title text="Daftar Bandara" />
        
        <List>
          {
            this.state.data_bandara.map((l, i) => (
              <ListItem
                key={i}
                title={l.nama}
                subtitle={l.tempat}
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}
