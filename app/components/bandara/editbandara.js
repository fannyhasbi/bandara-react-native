import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

export default class EditBandara extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: this.props.navigation.getParam('kode'),
      nama: this.props.navigation.getParam('nama'),
      kota: this.props.navigation.getParam('kota'),
      negara: this.props.navigation.getParam('negara')
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

        <FormLabel>Kode Bandara</FormLabel>
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

        <FormLabel>Kota</FormLabel>
        <FormInput
          value={this.state.kota}
          onChangeText={(value) => this.setState({kota: value})}
        />

        <FormLabel>Negara</FormLabel>
        <FormInput
          value={this.state.negara}
          onChangeText={(value) => this.setState({negara: value})}
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