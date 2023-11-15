import Button from '../material/Button'
import { StyleSheet, View } from 'react-native';
import Screens from '../../constants/Screens';
import Colors from '../../constants/Colors';
import Text from '../material/Text';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskScreen from './tasks/TaskScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faTasks } from '@fortawesome/free-solid-svg-icons';
import BoardScreen from './BoardScreen';

const Tab = createBottomTabNavigator();

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
    tabBarActiveTintColor: Colors.text.highlight,
    tabBarInactiveTintColor: Colors.text.disabled,
    tabBarLabelStyle: {
        fontSize: 10,
        paddingBottom: 10
    },

})

export default function HomeScreen({ navigation }) {
    return <Tab.Navigator initialRouteName={Screens.Home} screenOptions={screenOptions}>
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
      </Tab.Navigator>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgrounds.main,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
