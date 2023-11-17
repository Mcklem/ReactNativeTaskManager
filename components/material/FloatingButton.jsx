

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const FloatingButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.button.main,
        position: 'absolute',
        bottom: "12%",
        right: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, 
    },
    fabText: {
        fontSize: 24,
        color: Colors.text.main, 
        fontWeight: 'bold',
    },
});

export default FloatingButton;