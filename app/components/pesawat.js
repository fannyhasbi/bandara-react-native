import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {List, ListItem, Button, FormLabel, FormInput} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

class Pesawat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_pesawat : [
        {
          nama: 'A',
          kode: 'abd'
        },
        {
          nama: 'Boeing',
          kode: 'cda'
        }
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Button
          title="Tambah"
          onPress={() => this.props.navigation.navigate('TambahPesawat')}
        />
        <List>
          {
            this.state.data_pesawat.map((l, i) => (
              <ListItem
                key={i}
                title={l.nama}
                subtitle={l.kode}
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}

class TambahPesawat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: '',
      nama: '',
      kapasitas: '',
    }
  }

  kirim_form(){
    // nanti
  }

  render(){
    return (
      <View>
        <FormLabel>Kode Pesawat</FormLabel>
        <FormInput onChangeText={(value) => this.setState({kode: value})} />

        <FormLabel>Nama</FormLabel>
        <FormInput onChangeText={(value) => this.setState({nama: value})} />

        <FormLabel>Kapasitas</FormLabel>
        <FormInput onChangeText={(value) => this.setState({kota: value})} />

        <Button
          title="Tambah"
          onPress={() => this.kirim_form()}
        />
      </View>
    );
  }
}

const PesawatScreen = createStackNavigator({
  Pesawat: {
    screen: Pesawat,
    navigationOptions: {
      title: 'Daftar Pesawat'
    }
  },
  TambahPesawat: {
    screen: TambahPesawat,
    navigationOptions: {
      title: 'Tambah Pesawat'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
});

export default PesawatScreen;