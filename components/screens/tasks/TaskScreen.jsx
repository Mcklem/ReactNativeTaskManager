
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../../../constants/Screens';
import TaskCreationScreen from './TaskCreationScreen';
import TaskListScreen from './TaskListScreen';

const Stack = createStackNavigator();


export default function TaskScreen({ navigation }) {

    
    return (
        <Stack.Navigator initialRouteName={Screens.Tasks.TaskList} screenOptions={screenOptions}>
            <Stack.Screen name={Screens.Tasks.TaskList} component={TaskListScreen} />
            <Stack.Screen name={Screens.Tasks.TaskCreation} component={TaskCreationScreen} />
        </Stack.Navigator>
    );
}


const screenOptions = ({ route }) => ({
    headerShown: false
})
