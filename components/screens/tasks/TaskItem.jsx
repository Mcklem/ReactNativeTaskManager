import { Pressable, StyleSheet, View } from "react-native";
import Text from '../../material/Text';
import Colors from "../../../constants/Colors";

export default function TaskItem({ item, onPress }) {

    function handleTouch(item) {
        if (onPress != null) {
            onPress(item)
        }
    }

    return <Pressable style={styles.taskItem} onPress={() => { handleTouch(item) }}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.assignedTo}>{`Created by: `}</Text>
            <Text style={styles.assignedToHighlight}>{item.creator}</Text>
        </View>
    </Pressable>

}

const styles = StyleSheet.create({
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
        color: Colors.text.main,
    },
    assignedToHighlight: {
        color: Colors.text.highlight,
    },
});
