import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

export default class EditPesawat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: this.props.navigation.getParam('kode'),
      nama: this.props.navigation.getParam('nama'),
      kode_maskapai: this.props.navigation.getParam('kode_maskapai'),
      kapasitas: this.props.navigation.getParam('kapasitas').toString(),
      kode_pabrik: this.props.navigation.getParam('kode_pabrik'),
    }

    this.simpan = this.simpan.bind(this);
  }

  simpan(){
    // action simpan

    this.props.navigation.goBack();
  }

  render(){
    return (
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.judul}>{this.props.navigation.getParam('nama')}</Text>
        </View>

        <FormLabel>Kode Pesawat</FormLabel>
        <FormInput
          value={this.state.kode}
          onChangeText={(value) => this.setState({kode: value})}
        />
        <FormValidationMessage></FormValidationMessage>

        <FormLabel>Nama</FormLabel>
        <FormInput
          value={this.state.nama}
          onChangeText={(value) => this.setState({nama: value})}
        />

        <FormLabel>Maskapai</FormLabel>
        <FormInput
          value={this.state.kode_maskapai}
          onChangeText={(value) => this.setState({kode_maskapai: value})}
        />

        <FormLabel>Kapasitas</FormLabel>
        <FormInput
          value={this.state.kapasitas}
          onChangeText={(value) => this.setState({kapasitas: value})}
        />

        <FormLabel>Pabrik</FormLabel>
        <FormInput
          value={this.state.kode_pabrik}
          onChangeText={(value) => this.setState({kode_pabrik: value})}
        />

        <Button
          icon={{name: 'save'}}
          backgroundColor='#03A9F4'
          buttonStyle={{
            borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 20
          }}
          title='Simpan'
          onPress={this.simpan}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
})