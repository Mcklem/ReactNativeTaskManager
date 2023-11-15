import { StatusBar } from 'expo-status-bar';
import Button from '../material/Button'
import Text from '../material/Text';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


export default function BoardScreen(){

    const tasks = [
        { id: '1', title: 'Hacer la compra', assignedTo: 'Usuario 1' },
        { id: '2', title: 'Preparar informe', assignedTo: 'Usuario 2' }
    ];

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
        borderRadius: 8
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.main,
        marginBottom: 8,
    },
    assignedTo: {
        color: Colors.text.highlight,
    },
});
