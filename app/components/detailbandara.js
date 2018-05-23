import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Card, Button, List, ListItem} from 'react-native-elements';

export default class DetailBandara extends React.Component {
  deleteClick(){
    Alert.alert(
      '',
      'Apakah yakin ingin menghapus bandara ini?',
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
        image={require('../../img/flights.jpg')}
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
            title="Kota"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('kota')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Negara"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('negara')}
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
          onPress={() => this.props.navigation.navigate('EditBandara', {...this.props.navigation.state.params})}
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