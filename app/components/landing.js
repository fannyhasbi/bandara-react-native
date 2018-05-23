import React from 'react';
import { Text, View } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data_landing : [
        {
          asal: 'A',
          waktu: '2016',
          kode_pesawat: 'asc',
          penumpang: 126
        },
        {
          asal: 'B',
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
            this.state.data_landing.map((l, i) => (
              <ListItem
                key={i}
                title={l.asal}
                subtitle={l.kode_pesawat}
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}

const LandingScreen = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: 'Data Landing'
    }
  }
});

export default LandingScreen;