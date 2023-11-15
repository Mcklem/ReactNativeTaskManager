import { StatusBar } from 'expo-status-bar';
import Button from '../material/Button'
import Text from '../material/Text';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';
import api from '../../api';


export default function BoardScreen(){

    const [tasks, setTasks] = useState([])

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


    const renderItem = ({ item }) => (
        <View style={styles.taskItem}>
            <StatusBar hidden />
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.assignedTo}>{`Asignada a: ${item.assignedTo}`}</Text>
        </View>
    );

    return (
        <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.taskList}
        />
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
