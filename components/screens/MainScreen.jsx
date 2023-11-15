import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './LoginScreen';
import Board from './BoardScreen';
import NotAvailableScreen from './NotAvailableScreen';
import Colors from '../../constants/Colors';
import { faPerson, faUser, faKey, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import PasswordRecovery from './PasswordRecovery';
//import Register from './Register';

const Stack = createStackNavigator();
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

// Pantalla principal con las tres secciones principales
export default function MainScreen() {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Login" component={Login} options={{
            tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faUser} color={Colors.icons.main} />
            )
        }} />
        <Tab.Screen name="PasswordRecovery" component={NotAvailableScreen} options={{
            tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faKey} color={Colors.icons.main} />
            )
        }} />
        <Tab.Screen name="Register" component={NotAvailableScreen} options={{
            tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faAddressCard} color={Colors.icons.main} />
            )
        }}/>
    </Tab.Navigator>
};