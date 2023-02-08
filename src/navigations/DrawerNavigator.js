import React from 'react';
import colors from '../constants/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStack from '../navigations/AppStack';

const Drawer = createDrawerNavigator();

export default function AppDrawer(props) {
  
  return (
    <Drawer.Navigator
      drawerStyle={{width: '75%', backgroundColor: colors.modelBackground}}
      >
      <Drawer.Screen
        name="AppStack"
        component={AppStack}
        options={{
          swipeEnabled: false, // to disable swipe gesture from all page(s)
        }}
      />
    </Drawer.Navigator>
  );
}
