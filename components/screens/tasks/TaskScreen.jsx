
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../../../constants/Screens';
import TaskCreationScreen from './TaskCreationScreen';
import TaskListScreen from './TaskListScreen';

const Stack = createStackNavigator();

/**
 * Deprecated
 * @param {*} param0 
 * @returns 
 */
export default function TaskScreen({}) {


    return (
        <Stack.Navigator initialRouteName={Screens.Tasks.TaskList} screenOptions={screenOptions}>
            <Stack.Screen name={Screens.Tasks.TaskList}>
                {(props) => <TaskListScreen {...props} ></TaskListScreen>}
            </Stack.Screen>
            <Stack.Screen name={Screens.Tasks.TaskCreation} component={TaskCreationScreen} />
        </Stack.Navigator>
    );
}

const screenOptions = ({ route }) => ({
    headerShown: false
})
