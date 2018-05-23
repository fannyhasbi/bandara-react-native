import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {List, ListItem, Button, FormLabel, FormInput} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import DetailBandara from './detailbandara';
import EditBandara from './editbandara';

class Bandara extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_bandara : [
        {
          kode: 'B000',
          nama: 'Bandar Udara Internasional Ngurah Rai',
          kota: 'Bali',
          negara: 'Indonesia'
        },
        {
          kode: 'B001',
          nama: 'Bandar Udara Internasional Sultan Aji Muhammad Sulaiman',
          kota: 'Balikpapan',
          negara: 'Indonesia'
        },
        {
          kode: 'J001',
          nama: 'Bandar Udara Internasional Soekarno-Hatta',
          kota: 'Jakarta',
          negara: 'Indonesia'
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
                subtitle={l.kota}
                leftIcon={{name: 'place'}}
                onPress={() => this.props.navigation.navigate('DetailBandara', {
                  kode: l.kode,
                  nama: l.nama,
                  kota: l.kota,
                  negara: l.negara
                })}
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}

class TambahBandara extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: '',
      nama: '',
      kota: '',
      negara: ''
    }
  }

  kirim_form(){
    // nanti
  }

  render(){
    return (
      <View>
        <FormLabel>Kode Bandara</FormLabel>
        <FormInput onChangeText={(value) => this.setState({kode: value})} />

        <FormLabel>Nama</FormLabel>
        <FormInput onChangeText={(value) => this.setState({nama: value})} />

        <FormLabel>Kota</FormLabel>
        <FormInput onChangeText={(value) => this.setState({kota: value})} />

        <FormLabel>Negara</FormLabel>
        <FormInput onChangeText={(value) => this.setState({negara: value})} />

        <Button
          title="Tambah"
          onPress={() => this.kirim_form()}
        />
      </View>
    );
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
  },
  DetailBandara: {
    screen: DetailBandara,
    navigationOptions: {
      title: 'Detail Bandara'
    }
  },
  EditBandara: {
    screen: EditBandara,
    navigationOptions: {
      title: 'Edit Bandara'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
});


export default BandaraScreen;