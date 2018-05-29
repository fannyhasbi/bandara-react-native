import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas : [
        {
          kode_pesawat: 'PKCJC',
          pesawat: 'Boeing 737-300',
          maskapai: 'Sriwijaya Air',
          asal: 'Balikpapan',
          bandara: 'Bandar Udara Internasional Sultan Aji Muhammad Sulaiman',
          penumpang: 130,
          waktu: '23 Nov \'17 10:19',
        },
        {
          kode_pesawat: 'PKLGQ',
          pesawat: 'Boeing 737-800',
          maskapai: 'Lion Air',
          asal: 'Pangkalanbun',
          bandara: 'Bandar Udara Iskandar',
          penumpang: 143,
          waktu: '23 Nov \'17 08:16',
        },
        {
          kode_pesawat: 'PKCJC',
          pesawat: 'Boeing 737-300',
          maskapai: 'Sriwijaya Air',
          asal: 'Balikpapan',
          bandara: 'Bandar Udara Internasional Sultan Aji Muhammad Sulaiman',
          penumpang: 97,
          waktu: '8 Nov \'17 03:22',
        }
      ]
    };
  }

  render(){
    return (
      <ScrollView>
        <List>
          {
            this.state.datas.map((l, i) => (
              <ListItem
                key={i}
                title={l.maskapai + ' - ' + l.pesawat}
                subtitle={l.asal}
                leftIcon={{name: 'flight-land'}}
              />
            ))
          }
        </List>
        
      </ScrollView>
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