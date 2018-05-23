import React from 'react'
import {createDrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import BandaraScreen from './components/bandara';
import PesawatScreen from './components/pesawat';
import TakeOffScreen from './components/takeoff';
import LandingScreen from './components/landing';

const Route = createDrawerNavigator({
  Bandara: {
    screen: BandaraScreen,
    navigationOptions: {
      drawerLabel: 'Bandara',
      drawerIcon: ({color}) => (
        <Icon name="place" />
      )
    }
  },
  Pesawat: {
    screen: PesawatScreen,
    navigationOptions: {
      drawerLabel: 'Pesawat',
      drawerIcon: ({color}) => (
        <Icon name="flight" />
      )
    }
  },
  TakeOff: {
    screen: TakeOffScreen,
    navigationOptions: {
      drawerLabel: 'Take Off',
      drawerIcon: ({color}) => (
        <Icon name="flight-takeoff" />
      )
    }
  },
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      drawerLabel: 'Landing',
      drawerIcon: ({color}) => (
        <Icon name="flight-land" />
      )
    }
  },

});

export default Route;