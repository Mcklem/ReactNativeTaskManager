import { StatusBar } from 'expo-status-bar';
import Button from '../material/Button'
import Text from '../material/Text';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';
import api from '../../api';
import TaskItem from './tasks/TaskItem'
import BoardTaskItemModal from './board/BoardTaskItemModal';

export default function BoardScreen() {

    const [tasks, setTasks] = useState([])
    const [isModalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        api.tasks.getTasks()
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTasks(json)
                return json;
            })
            .catch(console.error);
    }, []);

    function handleModalOnTouchItem(item){
        console.log(JSON.stringify(item, null, 2))
        setModalVisible(true);
    }

    function onModalPressHide(){
        setModalVisible(false);
    }

    return (
        <View>
            <StatusBar hidden />
            <FlatList
                data={tasks}
                renderItem={({item}) => <TaskItem item={item} onPress={handleModalOnTouchItem}/>}
                keyExtractor={item => item.id}
                style={styles.taskList}
            />
            <BoardTaskItemModal visible={isModalVisible} onRequestClose={onModalPressHide} onPressHide={onModalPressHide}/>
        </ View>
    );
};



const styles = StyleSheet.create({
    taskList: {
        padding: 16,
        backgroundColor: Colors.backgrounds.main,
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
