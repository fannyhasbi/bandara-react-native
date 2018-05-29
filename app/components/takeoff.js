import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

class TakeOff extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas : [
        {
          kode_pesawat: 'PKGSI',
          pesawat: 'Boeing 737-800',
          maskapai: 'Garuda Indonesia',
          tujuan: 'Jepara',
          bandara: 'Bandar Udara Dewadaru',
          penumpang: 126,
          waktu: '1 Nov \'17 06:22',
        },
        {
          kode_pesawat: 'PXAXO',
          pesawat: 'Airbus A320-200',
          maskapai: 'AirAsia',
          tujuan: 'Bali',
          bandara: 'Bandar Udara Internasional Ngurah Rai',
          penumpang: 332,
          waktu: '23 Nov \'17 09:30',
        },
        {
          kode_pesawat: 'PKGJL',
          pesawat: 'Airbus A330-243',
          maskapai: 'Garuda Indonesia',
          tujuan: 'Bali',
          bandara: 'Bandar Udara Internasional Ngurah Rai',
          penumpang: 333,
          waktu: '1 Nov \'17 09:34',
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
                subtitle={l.tujuan}
                leftIcon={{name: 'flight-takeoff'}}
                onPress={() => this.props.navigation.navigate('DetailTakeoff', {
                  kode_pesawat: l.kode_pesawat,
                  pesawat: l.pesawat,
                  maskapai: l.maskapai,
                  tujuan: l.tujuan,
                  bandara: l.bandara,
                  penumpang: l.penumpang,
                  waktu: l.waktu,
                })}
              />
            ))
          }
        </List>
        
      </ScrollView>
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