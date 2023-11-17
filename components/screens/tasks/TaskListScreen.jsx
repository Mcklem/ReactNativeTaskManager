import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import api from '../../../services/api';
import Colors from '../../../constants/Colors';
import Button from '../../material/Button';
import FloatingButton from '../../material/FloatingButton';
import TaskCreationModal from './TaskCreationModal';
import TaskEditionModal from './TaskEditionModal';
import { useTasksContext } from '../../../domain/context/TaskContext';


export default function TaskListScreen({  }) {

    const [selectedItem, setSelectedItem] = useState(null)
    const [creationModalVisible, setCreationModalVisible] = useState(false)
    const [editionModalVisible, setEditionModalVisible] = useState(false)

    const tasksContext = useTasksContext();

    function handleModalOnTouchItem(item) {
        setSelectedItem(item);
    }

    function onEditionModalPressHide() {
        setEditionModalVisible(false);
    }

    function onCreationModalPressHide() {
        setCreationModalVisible(false);
    }

    function handleCreationButtonPress(){
        setCreationModalVisible(true)
    }

    function onRemove(item){
        tasksContext.dispatch({ type: 'REMOVE_TASK', payload: item })
    }

    return (
        <View>
            <StatusBar hidden />
            <FlatList
                data={tasksContext.state.tasks.filter((task)=>{ return task.assignedTo.contains("user101")})}
                renderItem={({ item }) => <TaskItem removable item={item} onRemove={(item)=>{onRemove(item)}} onPress={handleModalOnTouchItem} />}
                keyExtractor={item => item.id}
                style={styles.taskList}
            />
            <FloatingButton onPress={handleCreationButtonPress}></FloatingButton>
            <TaskCreationModal onRequestClose={onCreationModalPressHide} onPressHide={onCreationModalPressHide} visible={creationModalVisible}></TaskCreationModal>
            <TaskEditionModal taskToEdit={selectedItem} onRequestClose={onEditionModalPressHide} onPressHide={onEditionModalPressHide} visible={editionModalVisible}></TaskEditionModal>
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
    }
});
