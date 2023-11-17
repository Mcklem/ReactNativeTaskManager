import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import api from '../../../services/api';
import Colors from '../../../constants/Colors';
export default function TaskListScreen({tasks}) {

    const [selectedItem, setSelectedItem] = useState(null)

    function handleModalOnTouchItem(item) {
        console.log(JSON.stringify(item, null, 2))
        setSelectedItem(item);
    }

    function onModalPressHide() {
        setSelectedItem(null);
    }

    return (
        <View>
            <StatusBar hidden />
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskItem item={item} onPress={handleModalOnTouchItem} />}
                keyExtractor={item => item.id}
                style={styles.taskList}
            />
            
        </ View>
    );
};



const styles = StyleSheet.create({
    taskList: {
        padding: 16,
        height: "100%",
        backgroundColor: Colors.backgrounds.main,
        overflow: 'hidden'
    },
    taskItem: {
        marginBottom: 16,
        backgroundColor: Colors.items.main,
        padding: 16,
        borderRadius: 4
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.main,
        marginBottom: 4,
    },
    assignedTo: {
        color: Colors.text.highlight,
    },
});
