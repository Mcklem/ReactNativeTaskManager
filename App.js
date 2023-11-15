import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/screens/HomeScreen';
import MainScreen from './components/screens/MainScreen';
import Screens from './constants/Screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Main} headerMode="none">
      <Stack.Screen name={Screens.Main} component={MainScreen}  />
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer >
  );
}

