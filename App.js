import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


import BoardScreen from './components/screens/BoardScreen';
import MainScreen from './components/screens/MainScreen';
import Screens from './constants/Screens';
import Colors from './constants/Colors';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboardList, faTasks } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  screen: {
    headerStyle: {
      backgroundColor: Colors.backgrounds.header,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});




export default function App() {

  return (
<NavigationContainer>
    {/*<Tab.Navigator initialRouteName={Screens.Home} screenOptions={screenOptions}>
        <Tab.Screen name={Screens.Board} component={BoardScreen} options={{
          title: 'Board', tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faClipboardList} color={Colors.icons.main} />
          ), ...styles.screen
        }} />
        <Tab.Screen name={Screens.Tasks.Main} component={TaskScreen} options={{
          title: 'Tasks', tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTasks} color={Colors.icons.main} />
          ), ...styles.screen
        }} />
      </Tab.Navigator>*/}
      <Stack.Navigator initialRouteName={Screens.Main} headerMode="none">
      <Stack.Screen name={Screens.Main} component={MainScreen} />
      <Stack.Screen name={Screens.Board} component={BoardScreen} />
    </Stack.Navigator>
    </NavigationContainer >
  );
}

