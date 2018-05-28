import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import {List, ListItem, Button, FormLabel, FormInput, Divider} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import DetailPesawat from './pesawat/detailpesawat';

class Pesawat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas : [
        {
          kode: 'PXAXO',
          nama: 'Airbus A320-200',
          kode_maskapai: 'A001',
          maskapai: 'AirAsia',
          kapasitas: 180,
          kode_pabrik: '0A01',
          pabrik: 'Airbus'
        },
        {
          kode: 'PKGLV',
          nama: 'Boeing 737-300',
          kode_maskapai: 'C001',
          maskapai: 'Citilink',
          kapasitas: 149,
          kode_pabrik: '0A03',
          pabrik: 'Boeing'
        },
        {
          kode: 'PKGJK',
          nama: 'Boeing 737-800',
          kode_maskapai: 'G001',
          maskapai: 'Garuda Indonesia',
          kapasitas: 189,
          kode_pabrik: '0A03',
          pabrik: 'Boeing'
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

        <Divider style={styles.batas} />

        <ScrollView contentContainerStyle={styles.scroll}>
          <List>
            {
              this.state.datas.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.nama}
                  subtitle={l.maskapai}
                  leftIcon={{name: 'flight'}}
                  onPress={() => this.props.navigation.navigate('DetailPesawat', {
                    kode: l.kode,
                    nama: l.nama,
                    kode_maskapai: l.kode_maskapai,
                    maskapai: l.maskapai,
                    kapasitas: l.kapasitas,
                    kode_pabrik: l.kode_pabrik,
                    pabrik: l.pabrik
                  })}
                />
              ))
            }
          </List>
        </ScrollView>
        
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
  },
  DetailPesawat: {
    screen: DetailPesawat,
    navigationOptions: {
      title: 'Detail Pesawat'
    }
  } 
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  batas: {
    marginTop: 20,
    paddingTop: 0,
    height: 0
  },
  scroll: {
    paddingVertical: 0
  }
});

export default PesawatScreen;