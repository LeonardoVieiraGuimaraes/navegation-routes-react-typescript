import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './tab.routes';
import { AntDesign } from '@expo/vector-icons';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen name="Inicio" component={TabRoutes}
        options={
          {
            drawerIcon: () => <AntDesign name="home" size={24} color="green" />,
            drawerLabel: 'Inicio'
          }
        } />

      <Drawer.Screen name="profile" component={StackRoutes}
        options={
          {
            drawerIcon: () => <AntDesign name="user" size={24} color="green" />,
            drawerLabel: 'Meu Perfil'
          }
        } />

    </Drawer.Navigator>
  );
}