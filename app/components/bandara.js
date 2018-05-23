import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {List, ListItem, Button} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import Title from './title';

class Bandara extends React.Component {
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
      <View style={styles.container}>
        <Button
          title="Tambah"
          onPress={() => this.props.navigation.navigate('TambahBandara')}
        />
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

class TambahBandara extends React.Component {
  render(){
    return <Text>Ini tambah bandara</Text>
  }
}

const BandaraScreen = createStackNavigator({
  Bandara: {
    screen: Bandara,
    navigationOptions: {
      title: 'Daftar Bandara'
    }
  },
  TambahBandara: {
    screen: TambahBandara,
    navigationOptions: {
      title: 'Tambah Bandara'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})


export default BandaraScreen;