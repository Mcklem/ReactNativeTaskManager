import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/screens/HomeScreen';
import TaskScreen from './components/screens/TaskScreen';
import Screens from './constants/Screens';
import Colors from './constants/Colors';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faTasks } from '@fortawesome/free-solid-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: {
    height: 60,
    paddingHorizontal: 5,
    paddingTop: 0,
    backgroundColor: Colors.backgrounds.tab,
    position: 'absolute',
    borderTopWidth: 0,
  },
})


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Screens.Home} screenOptions={screenOptions}>
        <Tab.Screen name={Screens.Home} component={HomeScreen} options={{
          title: 'Home', tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={Colors.icons.main} />
          ), ...styles.screen
        }} />
        <Tab.Screen name={Screens.Tasks} component={TaskScreen} options={{
          title: 'Tasks', tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTasks} color={Colors.icons.main} />
          ), ...styles.screen
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

