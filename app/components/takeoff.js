import React from 'react';
import { Text, View } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

class TakeOff extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_takeoff : [
        {
          tujuan: 'A',
          waktu: '2016',
          kode_pesawat: 'asc',
          penumpang: 126
        },
        {
          tujuan: 'B',
          waktu: '2017',
          kode_pesawat: 'das',
          penumpang: 324
        }
      ]
    };
  }

  render(){
    return (
      <View>
        <List>
          {
            this.state.data_takeoff.map((l, i) => (
              <ListItem
                key={i}
                title={l.tujuan}
                subtitle={l.kode_pesawat}
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}

const TakeOffScreen = createStackNavigator({
  TakeOff: {
    screen: TakeOff,
    navigationOptions: {
      title: 'Data Take Off'
    }
  }
});

export default TakeOffScreen;