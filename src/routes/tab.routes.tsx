import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { AntDesign } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={
          {
            tabBarIcon: () => <AntDesign name="home" size={24} color="green" />
          }
        } />
      <Tab.Screen name="About" component={AboutScreen} options={
        {
          tabBarIcon: () => <AntDesign name="infocirlceo" size={24} color="green" />
        }
      } />
    </Tab.Navigator>

  );
}