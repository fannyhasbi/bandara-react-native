import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, List, ListItem} from 'react-native-elements';

export default class DetailLanding extends React.Component {
  render(){
    return (
      <Card
        title={this.props.navigation.getParam('bandara')}
        image={require('../../../img/flights.jpg')}
      >

        <List
          containerStyle={styles.listContainer}
        >
          <ListItem
            title="Maskapai"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('maskapai')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Pesawat"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('kode_pesawat') + ' - ' + this.props.navigation.getParam('pesawat')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Kota Asal"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('asal')}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Total Penumpang"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('penumpang').toString()}
            containerStyle={styles.itemContainer}
          />
          <ListItem
            title="Waktu"
            hideChevron={true}
            rightTitle={this.props.navigation.getParam('waktu')}
            containerStyle={styles.itemContainer}
          />
        </List>

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