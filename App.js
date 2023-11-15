import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/screens/HomeScreen';
import TaskScreen from './components/screens/TaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name="Tasks" component={TaskScreen} options={{ title: 'Tasks Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

