import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NurseScreen1 from '../screens/NurseScreenInicio';
import NurseScreen2 from '../screens/NurseScreen2_legislacao';
import NurseScreen3 from '../screens/NurseScreen3';
import NurseScreen4 from '../screens/NurseScreen4';
import NurseScreen5 from '../screens/NurseScreen5';
import NurseScreen6 from '../screens/NurseScreen6';
import NurseScreen7 from '../screens/NurseScreen7';
import NurseScreen8 from '../screens/NurseScreen8';
import NurseScreen9 from '../screens/NurseScreen9';
import NurseScreen10 from '../screens/NurseScreen10';
import NurseScreen11 from '../screens/NurseScreen11';
import NurseScreen12 from '../screens/NurseScreen12';
// import NurseScreen13 from '../screens/NurseScreen13';

const Tab = createMaterialTopTabNavigator();

function NurseTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Nurse1"
      screenOptions={({ route }) => ({
        tabBarLabel: () => null, // Esconder os rótulos das guias
        tabBarStyle: { backgroundColor: 'white' }, // Cor de fundo verde
        tabBarIndicatorStyle: { backgroundColor: 'black' }, // Cor da linha indicadora
      })}
    >
      <Tab.Screen name="Nurse1" component={NurseScreen1} />
      <Tab.Screen name="Nurse2" component={NurseScreen2} />
      <Tab.Screen name="Nurse3" component={NurseScreen3} />
      <Tab.Screen name="Nurse4" component={NurseScreen4} />
      <Tab.Screen name="Nurse5" component={NurseScreen5} />
      <Tab.Screen name="Nurse6" component={NurseScreen6} />
      <Tab.Screen name="Nurse7" component={NurseScreen7} />
      <Tab.Screen name="Nurse8" component={NurseScreen8} />
      <Tab.Screen name="Nurse9" component={NurseScreen9} />
      <Tab.Screen name="Nurse10" component={NurseScreen10} />
      <Tab.Screen name="Nurse11" component={NurseScreen11} />
      <Tab.Screen name="Nurse12" component={NurseScreen12} />
      {/* <Tab.Screen name="Nurse13" component={NurseScreen13} /> */}

    </Tab.Navigator>
  );
}

export default NurseTabs;
