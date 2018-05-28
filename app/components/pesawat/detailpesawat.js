import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Card, Button, List, ListItem} from 'react-native-elements';

export default class DetailPesawat extends React.Component {
  deleteClick(){
    Alert.alert(
      '',
      'Apakah yakin ingin menghapus pesawat ini?',
      [
        {
          text: 'Tidak'
        },
        {
          text: 'Hapus',
          onPress: () => Alert.alert('Yoyoy', '', [{text: 'OK'}])
        }
      ]
    )
  }

  render(){
    return (
      <Card
        title={this.props.navigation.getParam('nama')}
        image={require('../../../img/flights.jpg')}
      >

        <List
          containerStyle={styles.listContainer}
        >
          <ListItem
            title="Kode"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('kode')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Maskapai"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('maskapai')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Kapasitas"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('kapasitas').toString()}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Pabrik"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('pabrik')}
            containerStyle={styles.itemContainer}
          />
        </List>

        <Button
          icon={{name: 'create'}}
          backgroundColor='#03A9F4'
          buttonStyle={{
            borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 20
          }}
          title='Edit'
          onPress={() => this.props.navigation.navigate('EditPesawat', {...this.props.navigation.state.params})}
        />

        <Button
          icon={{name: 'delete'}}
          backgroundColor='#F4A903'
          buttonStyle={{
            borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 10
          }}
          title='Hapus'
          onPress={this.deleteClick}
        />

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  itemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
})