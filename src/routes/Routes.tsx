import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParams } from '../types';
import Detail from "../views/Detail";
import Home from "../views/Home";

const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,96,255)',
    tintColor: '#fff'
  },
  headerTitleStyle: {
    color: '#fff',
    tintColor: '#fff'
  },
  headerTintColor: '#fff'
}

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={ routeScreenDefaultOptions }/>
      <Stack.Screen name="Detail" component={Detail} options={ routeScreenDefaultOptions }/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;